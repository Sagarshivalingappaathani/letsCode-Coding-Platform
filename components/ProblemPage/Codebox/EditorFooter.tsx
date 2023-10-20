import React from "react";
import { BsChevronUp } from "react-icons/bs";

type EditorFooterProps = {
	handlesubmit:()=>void;
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handlesubmit }) => {
	return (
		<div className='flex bg-dark-layer-1 absolute bottom-0 right-0 z-10z-10 w-full mb-5'>
			<div className='mx-5 my-[10px] flex justify-between w-full'>
				<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4 mb-8'>
					<button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2'>
						<div className='ml-1 transform transition flex items-center'>	
						</div>
					</button>
				</div>
				<div className='ml-auto flex items-center space-x-4'>
					<button
						className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg'
						onClick={handlesubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
export default EditorFooter;