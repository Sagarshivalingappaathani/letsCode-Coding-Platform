import react, { useState } from 'react'
import { Problem } from '../../../data/types/problem';

type ProblemDescriptionProps = {
	problem:Problem
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = (props:ProblemDescriptionProps) => {
	if (!props.problem) {
		console.error("props.problem is null or undefined");
		return <div>No problem data available.</div>;
	  }
  
	return (
		<div className='bg-white-layer-1 ml-4 mb-12'>
			{/* TAB */}
			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
					<div className='flex space-x-4'>
						<div className='flex-1 mr-2 text-lg font-medium text-black'>{props.problem.title}</div>
						</div>

						<div className='flex items-center mt-3'>
							<button
								className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${
								props.problem?.difficulty === 'Medium'
									? 'bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300'
									: props.problem?.difficulty === 'Easy'
									? 'bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300'
									: props.problem?.difficulty === 'Hard'
									? 'bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300'
									: 'bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300'
								}`
							}
							>
								{props.problem?.difficulty}
							</button>
						</div>



						{/* Problem Statement(paragraphs) */}
						<div className=' text-sm my-5'>
							<div dangerouslySetInnerHTML={{ __html: props.problem.problemStatement }} />
						</div>

						{/* Examples */}
						<div className='mt-4'>
						{props.problem.examples.map((example, index) => (
							<div key={example.id} className="bg-white p-4 rounded shadow-md mb-4">
								
							<p className='font-medium text-lg'>Example {index + 1}: </p>
							{example.img && <img src={example.img} alt='' className='mt-3' />}
							<div className='example-card'>
								<pre>
								<strong className=''>Input: </strong> {example.inputText}
								<br />
								<strong>Output:</strong>
								{example.outputText} <br />
								{example.explanation && (
									<>
									<strong>Explanation:</strong> {example.explanation}
									</>
								)}
								</pre>
							</div>
							</div>
						))}
						</div>

						{/* Constraints */}
						<div className='my-8 pb-4'>
							<div className=' text-sm font-medium'> <strong>Constraints:</strong></div>
							<ul className=' ml-3 list-disc '>
								<div dangerouslySetInnerHTML={{ __html: props.problem.constraints }} />
							</ul>
						</div>

						{/* Tags*/}
						<div>
							<div className='my-5'>
								<p className="cursor-pointer" >
									<strong>Tags:</strong>
								</p>
									<ul className='flex my-3'>
									{props.problem.tag.map((tag) => (
										<li className='mx-3' key={tag.id}>{tag.name}</li>
									))}
									</ul>
	
							</div>
						</div>
						{/* companies*/ }
						<div>
							<div className='my-5'>
								<p className="cursor-pointer" >
									<strong>Companies:</strong>
								</p>
							
									<ul className='flex my-3'>
									{props.problem.companies.map((company) => (
										<li className='mx-3' key={company.id}>{company.name}</li>
									))}
									</ul>
	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProblemDescription;
