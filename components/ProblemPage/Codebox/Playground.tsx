import React, { useEffect, useState } from 'react';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import '../../../styles/global.css';
import { Problem } from '../../../data/types/problem';
import EditorFooter from './EditorFooter';
import PreferenceNav from './PreferenceNav';
import {app,firestore} from "../../../firebaseConfig"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs,updateDoc, where, getFirestore, orderBy, query,arrayUnion} from "firebase/firestore";

type PlaygroundProps = {
  problem: Problem;
};



const Playground: React.FC<PlaygroundProps> = (props: PlaygroundProps) => {
  const [langid,setlangid]=useState<number>(0);
  const [lang, setLang] = useState<string>("54");
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  const [usercode, setUsercode] = useState<string>(''); // Initialize usercode as an empty string
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success"| "failed"| "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [results, setResults] = useState<string>("");
  const [user,setUser]=useState<any>(null)

  const temp=getusedetails(user,setUser);
  //console.log(temp);

  useEffect(() => {
    const boilerCode = props.problem.starterCode[langid].name;
    setUsercode(boilerCode);
  }, [langid]);


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
   
	if(!user){
		alert("please login to submit code")
		return;
	}

	setSubmissionStatus("loading");
    setFeedbackMessage("Submitting your code...");

    try {
		let jsonResponse;
		
		try{
			//console.log(langid)
			//console.log(props.problem.intialcode[langid].name+usercode+props.problem.endingcode[langid].name)
			const response = await fetch(
			  "https://judge0-ce.p.rapidapi.com/submissions",
			  {
				method: "POST",
				headers: {
				  "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
				  "x-rapidapi-key": "eb318dba23mshf8f373d7d20e43dp1e7a93jsn925d441a53d6", 
				  "content-type": "application/json",
				  accept: "application/json",
				},
				body: JSON.stringify({
				  source_code: props.problem.intialcode[langid].name+usercode+props.problem.endingcode[langid].name,
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
				  "x-rapidapi-key": "eb318dba23mshf8f373d7d20e43dp1e7a93jsn925d441a53d6", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
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
			updatedoc(user,props.problem.id,props.problem.difficulty);
		}else{
			setSubmissionStatus("failed");
			setFeedbackMessage("try again your solution is not correct for the all test case");
			setResults(output);
			console.log(results)
			console.log(feedbackMessage)
		}
        
      } else if (jsonGetSolution.stderr) {
        const error = atob(jsonGetSolution.stderr);
        setSubmissionStatus("error");
        setFeedbackMessage("Error in the submission. Please check your code and try again.");
        setResults(error);
      } else {
        if (jsonGetSolution.compile_output !== null) {
          const compilation_error = atob(jsonGetSolution.compile_output);
          setSubmissionStatus("error");
          setFeedbackMessage("Compilation error. Please check your code and try again.");
          setResults(compilation_error);
		  console.log(results)
        }
      }
    } catch {
	  alert("error at")
      setSubmissionStatus("error");
      setFeedbackMessage("Error Creating Submission");
    }
  }

return (
	<div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden w-full rounded-lg overflow-hidden shadow-lg  border border-gray-300 h-[calc(100vh-94px)]">
	  <PreferenceNav lang={lang} setLang={setLang} langid={langid} setlangid={setlangid} time={props.problem.averagetime}/>
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
			  <div className="flex items-center space-x-6 ">
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

function getusedetails(user:any,setUser: React.Dispatch<React.SetStateAction<any>>){
	
  const fetchUserDetails = async (email:string|null) => {
    const db = getFirestore(app);
    const usersCollection = collection(db, 'users'); 
  
    const q = query(usersCollection, where('email', '==', email));
  
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
          const userData = doc.data();
          setUser(userData);
        });
      } else {
        console.log('No user found with this email.');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  
  useEffect(() => {
    const auth = getAuth(app);
  
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userEmail = currentUser.email;
        fetchUserDetails(userEmail);
      } else {
        setUser(null);
      }
    });
  
    return () => unsubscribe(); 
  }, [user]);

  return user|| null;

}

async function updatedoc(user:any, id:string, difficulty:string) {
	difficulty = difficulty.toLowerCase();
  
	const collectionRef = collection(firestore, "users");
	const docToupdate = doc(firestore, "users", user.uid);
  
	const updatedSolvedProbs = { ...user.solvedprob };
	updatedSolvedProbs[difficulty] = (updatedSolvedProbs[difficulty] || 0) + 1;
  
	const today = new Date();
	today.setHours(0, 0, 0, 0); 
	let todayIndex :any;
	if(user.ActivityInd){
		todayIndex = user.ActivityInd.findIndex((entry:any) => {
			if (entry.date) {
				const firestoreTimestamp =entry.date;
				const date = new Date(firestoreTimestamp.seconds * 1000); 
				console.log(date.getDate())
				console.log(new Date().getDate())
				  return date.getDate() == new Date().getDate();
			}
			return false; 
		  });
	}
	
	const updatedActivityInd = [...user.ActivityInd];
  
	if (todayIndex!==-1) {
	  updatedActivityInd[todayIndex].count += 1;
	} else {
	  updatedActivityInd.push({ date: today, count: 1 });
	}
  
	const updateData = {
	  solvedProblems: arrayUnion(id),
	  solvedprob: updatedSolvedProbs,
	  ActivityInd: updatedActivityInd,
	};
  
	try {
	  await updateDoc(docToupdate, updateData);
	  console.log('Updated successfully');
	} catch (err) {
	  console.error(err);
	}
  }
  