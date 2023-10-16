import react from 'react'
import { Problem } from '../../../utils/types/problem';

type ProblemDescriptionProps = {
	problem:Problem
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = (props:ProblemDescriptionProps) => {
	if (!props.problem) {
		console.error("props.problem is null or undefined");
		return <div>No problem data available.</div>;
	  }
	  
	
	return (
		<div className='bg-white-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-white-layer-2  overflow-x-hidden'>
				<div className="bg-white-layer-2 text-gradient-orange rounded-t-[5px] px-5 py-[10px] text-xl font-bold cursor-pointer text-gradient">
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg  font-medium'>{props.problem.title}</div>
						</div>
							<div className='flex items-center mt-3'>
								<div
									className='inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize '
								>
									{props.problem?.difficulty}
								</div>

							</div>

						{/* Problem Statement(paragraphs) */}
						<div className=' text-sm'>
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
							<div className=' text-sm font-medium'>Constraints:</div>
							<ul className=' ml-5 list-disc '>
								<div dangerouslySetInnerHTML={{ __html: props.problem.constraints }} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProblemDescription;
