"use client";
import Link from "next/link";
import { DBProblem } from "../../data/types/problem";
import { useEffect, useState } from "react";
import {app,firestore} from "../../firebaseConfig"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, where, getFirestore, orderBy, query } from "firebase/firestore";


type Props = {}

const Page = (props: Props) => {
    const [rulespage,setrulespage]=useState<boolean>(true)
    const [loadingProblem,setLoadingProblem]=useState<boolean>(true)
    const problem=useGetProblem(loadingProblem,setLoadingProblem);
    console.log(problem)

  return (
    <>
        {rulespage && 
            <div className="m-20">
            <div>
                <div>
                    <button className="bg-green-500 mb-5 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full animate-pulse"
                    >
                    Rules
                    </button>
                </div>
                <div>
                        <p className='font-bold m-3'>1. In contest only one problem is there</p>
                        <p className='font-bold m-3'>2. You can submit your code in any programming language you like.</p>
                        <p className='font-bold m-3'>3. The time limit for each submission will be 15 minutes. If the solution does not get accepted within this period, it will not be accepted.</p>
                        <p className='font-bold m-3'>4. Plagiarism is strictly prohibited. Submissions found to be copied from other sources will be disqualified.</p>
                        <p className='font-bold m-3'>5. Respect the code of conduct. Any form of cheating or unethical behavior will result in immediate disqualification.</p>
                </div>
                <div>
                <button className=" mt-8 cursor-pointer text-white font-bold shadow-md hover:scale-[1.2] shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800"
                    onClick={()=>{
                        setrulespage(false);
                    }}
                >
                    Start Now
                </button>
                </div>
            </div>

            </div>
        }
        {
            !rulespage &&
            <div className="flex justify-center mt-20">
                <div className="card-contest p-6 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-semibold mb-2">{problem?.title}</h1>
                    <p className="text-gray-500 text-sm mb-4">Time: 20 min</p>
                    <div className="mb-4">
                    <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-md mr-2">{problem?.category}</span>
                    <span className="bg-indigo-100 text-green-600 text-xs px-2 py-1 rounded-md mr-2">{problem?.difficulty}</span>
                    </div>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mr-4" onClick={()=>{
                        setrulespage(true)
                    }}>Rules</button>
                    <Link
						className='hover:text-blue-600 cursor-pointer'
						href={`/contest/${problem?.id}`}>
						<button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md">Start Now</button>
					</Link>
                </div>
            </div>
        }
   </> 
  )
}

export default Page

function useGetProblem(loadingProblems:boolean,setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
	const [problem, setProblems] = useState<any>(null);
	useEffect(() => {
		const getProblems = async () => {
			setLoadingProblems(true);
            const randomInt = Math.floor(Math.random() * 5) + 1;
			const q = query(collection(firestore, "problems"), where('order', '==',randomInt));
			const querySnapshot = await getDocs(q);
			let tmp: any;
			querySnapshot.forEach((doc) => {
				tmp=({ id: doc.id, ...doc.data() } as DBProblem);
			});
			setProblems(tmp);
			setLoadingProblems(false);
		};

		getProblems();
	}, [setLoadingProblems]);
	return problem;
}
