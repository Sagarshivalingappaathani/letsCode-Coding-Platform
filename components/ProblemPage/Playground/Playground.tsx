import React, { useState } from 'react';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import '../../../styles/global.css';
import { Problem } from '../../../data/types/problem';
import EditorFooter from './EditorFooter';
import PreferenceNav from './PreferenceNav';
import axios from 'axios';

type PlaygroundProps = {
  problem: Problem;
};

const Playground: React.FC<PlaygroundProps> = (props: PlaygroundProps) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  const [usercode, setUsercode] = useState<string>(props.problem.starterCode);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success"| "failed"| "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [results, setResults] = useState<string>("");

  const newcode = (value: string) => {
    setUsercode(value);
  };

  function formatErrorMessage(line: string) {
	line = line.replace(/â/g, "'").replace(/â/g, "'").replace(/â/g, '"').replace(/â/g, '"');
	return line;
  }

  function change(){
	setSubmissionStatus("idle")
  }
  

  async function handlesubmit() {
    setSubmissionStatus("loading");
    setFeedbackMessage("Submitting your code...");

    try {
		let jsonResponse;
		
		try{

			const response = await fetch(
			  "https://judge0-ce.p.rapidapi.com/submissions",
			  {
				method: "POST",
				headers: {
				  "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
				  "x-rapidapi-key": "eb318dba23mshf8f373d7d20e43dp1e7a93jsn925d441a53d6", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
				  "content-type": "application/json",
				  accept: "application/json",
				},
				body: JSON.stringify({
				  source_code: usercode,
				  stdin: props.problem.inuputs ,
				  language_id: parseInt(lang),
				}),
			  }
			);
			
			 jsonResponse = await response.json();
			 console.log(jsonResponse)
		  }catch{
			alert('Error Creating Submission');
		  };
	  
		  let jsonGetSolution = {
			status: { description: "Queue" },
			stderr: null,
			compile_output: null,
			stdout:null,
		  };
	  
		  while (
			jsonGetSolution.status.description !== "Accepted" &&
			jsonGetSolution.stderr == null &&
			jsonGetSolution.compile_output == null&&
			jsonGetSolution.stdout==null
		  ) {
			if (jsonResponse.token) {
			  let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
	  
			  const getSolution = await fetch(url, {
				method: "GET",
				headers: {
				  "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
				  "x-rapidapi-key": "7d23d91f56msh0f4a619c9aefa37p10d773jsn6ff67fec4f2b", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
				  "content-type": "application/json",
				},
			  });
	  
			  jsonGetSolution = await getSolution.json();
			}

		  }


      if (jsonGetSolution.stdout) {
        const output = atob(jsonGetSolution.stdout);
		if(output===props.problem.output){
			setSubmissionStatus("success");
			setFeedbackMessage("Congratulations! Problem submitted successfully.");
			setResults(output);
		}else{
			setSubmissionStatus("failed");
			setFeedbackMessage("try again your solution is not correct for the all test case");
		}
        
      } else if (jsonGetSolution.stderr) {
        const error = atob(jsonGetSolution.stderr);
        console.log("error is at 91", error);
        setSubmissionStatus("error");
        setFeedbackMessage("Error in the submission. Please check your code and try again.");
        setResults(error);
      } else {
        if (jsonGetSolution.compile_output !== null) {
          const compilation_error = atob(jsonGetSolution.compile_output);
          console.log("error is at 98", compilation_error);
          setSubmissionStatus("error");
          setFeedbackMessage("Compilation error. Please check your code and try again.");
          setResults(compilation_error);
        }
      }
    } catch {
      setSubmissionStatus("error");
      setFeedbackMessage("Error Creating Submission");
    }
  }

  const [lang, setLang] = useState("54");



return (
	<div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden w-full">
	  <PreferenceNav lang={lang} setLang={setLang} />
	  <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
		<div className="w-full overflow-auto ">
		  <CodeMirror
			value={usercode}
			theme={vscodeDark}
			extensions={[javascript()]}
			onChange={newcode}
		  />
		</div>
		<div className="">
		  {submissionStatus === 'idle' ? (
			<div className='m-5'>
			  <div className="flex h-10 items-center space-x-6 ">
				<div className="relative flex h-full flex-col justify-center cursor-pointer">
				  <div className="text-sm font-medium leading-5 text-white">Testcases</div>
				  <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
				</div>
			  </div>
			  <div className="flex">
				{props.problem.examples.map((example, index) => (
				  <div
					className="mr-2 items-start mt-2 "
					key={example.id}
					onClick={() => setActiveTestCaseId(index)}
				  >
					<div className="flex flex-wrap items-center gap-y-4">
					  <div
						className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
						${activeTestCaseId === index ? "text-white" : "text-gray-500"}`}
					  >
						Case {index + 1}
					  </div>
					</div>
				  </div>
				))}
			  </div>
			  <div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{props.problem.examples[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{props.problem.examples[activeTestCaseId].outputText}
						</div>
					</div>
			</div>
		  ) : (
			<div>
			 <div>
				<div className="font-semibold my-4">
					{submissionStatus === 'loading' && (
					<div className="text-white text-center">
						<p className="text-xl font-bold mb-4">Compiling and Testing</p>
						<p className="text-gray-300 mb-4">Please wait while we compile and run your code.</p>
						<div className="flex items-center justify-center">
						<div className="animate-spin text-white text-2xl mr-2">⚙️</div>
						<p className="text-xl">Loading...</p>
						</div>
						<button className="absolute left-0 bottom-0 px-4 py-2 m-4 bg-green-500 text-white rounded-lg" onClick={change}>
						see the test case
						</button>
					</div>
					)}

					{submissionStatus === 'success' && (
					<div className="text-green-500 text-center">
						<p className="text-xl font-bold mb-4">Congratulations!</p>
						<p className="text-gray-300 mb-4">Your code has passed all test cases successfully.</p>
						<p className="text-2xl">🎉 All Tests Passed! 🎉</p>
						<button className="absolute left-0 bottom-0 px-4 py-2 m-4 bg-green-500 text-white rounded-lg" onClick={change}>
						see the test case
						</button>
					</div>
					)}

					{(submissionStatus === 'error') && (
					<div className="text-red-500">
						<span>{feedbackMessage}</span>
						<span className="animate-pulse inline-block ml-2">❌</span>
						<div>
						<p className="text-red-500">Error Details:</p>
						<ul>
							{results.split('\n').map((line, index) => (
							<li key={index}>{formatErrorMessage(line)}</li>
							))}
						</ul>
						<button
							className="absolute left-0 bottom-0 px-4 py-2 m-4 text-white rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-green-500 to-green-300 hover:from-green-600 hover:to-green-400"
							onClick={change}
							>
							See the test case
							</button>
						</div>
					</div>
					)}
					{(submissionStatus === 'failed') && (
					<p className="text-red-500">
						{feedbackMessage}
						<span className="animate-pulse inline-block ml-2">❌</span>
						<button className="absolute left-0 bottom-0 px-4 py-2 m-4 bg-green-500 text-white rounded-lg" onClick={change}>
						see the test case
						</button>
					</p>
					)}

				</div>
				</div>
			</div>
		  )}
		</div>
	  </Split>
	  {submissionStatus === 'idle' && <EditorFooter handlesubmit={handlesubmit} />}
	</div>
  );
  
};

export default Playground;
