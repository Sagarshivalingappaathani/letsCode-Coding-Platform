import Link from "next/link";
import Image from 'next/image';
import { DBProblem } from "../data/types/problem";
import { useEffect, useState } from "react";
import {app,firestore} from "../firebaseConfig"
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";

type ProblemsTableProps = {
	loadingProblems:boolean
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ loadingProblems,setLoadingProblems }) => {

	const problems = useGetProblems(loadingProblems,setLoadingProblems);
	
	return (
		<>
			<tbody className='gradiant text-dark '>
				{problems.map((problem, idx) => {
					const difficulyColor =
						problem.difficulty === "Easy"
							? "text-dark-green-s"
							: problem.difficulty === "Medium"
							? "text-dark-yellow"
							: "text-dark-pink";
					return (
						<tr className= "gradiant items-center" key={problem.id}>
							<td className={"px-6 py-4"}>{idx+1}</td>
							<td className='px-6 py-4'>
							
									<Link
										className='hover:text-blue-600 cursor-pointer'
										href={`/problems/${problem.id}`}
									>
										{problem.title}
									</Link>
								
							</td>
							<td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
							<td className={"px-6 py-4"}>{problem.category}</td>
                            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
							</th>
							<td className={"px-6 py-4"}>
							<a href="/">
                                <Image
                                src="/assets/images/solution.png" 
                                alt="logo"
                                width={45}
                                height={45}
                                className="object-contain"
                                />
                            </a>
								
							</td>
						</tr>
					);
				})}
			</tbody>
			
		</>
	);
};
export default ProblemsTable;

function useGetProblems(loadingProblems:boolean,setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
	const [problems, setProblems] = useState<DBProblem[]>([]);
	console.log(loadingProblems)
	useEffect(() => {
		const getProblems = async () => {
			// fetching data logic
			console.log(loadingProblems)
			setLoadingProblems(true);
			const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
			const querySnapshot = await getDocs(q);
			const tmp: DBProblem[] = [];
			querySnapshot.forEach((doc) => {
				tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
			});
			setProblems(tmp);
			setLoadingProblems(false);
			console.log(loadingProblems)
		};

		getProblems();
	}, [setLoadingProblems]);
	return problems;
}
