import Link from "next/link";
import Image from 'next/image';
import { DBProblem } from "../data/types/problem";
import { useEffect, useState } from "react";
import {app,firestore} from "../firebaseConfig"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, where, getFirestore, orderBy, query } from "firebase/firestore";

type ProblemsTableProps = {
	loadingProblems:boolean
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ loadingProblems,setLoadingProblems }) => {

	const problems = useGetProblems(loadingProblems,setLoadingProblems);
	const userDetails=getusedetailsonproblem();
	
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
							<td className='mx-5 text-left font-medium whitespace-nowrap text-dark-green-s'>
  {userDetails.find((element: string) => element === problem.id) ? (
    <div className="text-center" style={{ background: 'linear-gradient(45deg, #0CA750, #3AA34D)', color: 'white', borderRadius: '0.25rem', padding: '0.5rem' ,width:"130px"}}>
      completed
    </div>
  ) : (
    <div>
      <Link
        className='hover:text-blue-600 cursor-pointer'
        href={`/problems/${problem.id}`}
      >
        <div className="text-center" style={{ background: 'linear-gradient(45deg, #FFA500, #FF6347)', color: 'white', borderRadius: '0.25rem', padding: '0.5rem',width:"130px" }}>
          do it Now
        </div>
      </Link>
    </div>
  )}
</td>

							<td className={"px-6 py-4"}>
							<Link href={`/solution/${problem.id}`}>
                                <Image
                                src="/assets/images/solution.png" 
                                alt="logo"
                                width={45}
                                height={45}
                                className="object-contain"
                                />
                            </Link>
								
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
	useEffect(() => {
		const getProblems = async () => {
			setLoadingProblems(true);
			const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
			const querySnapshot = await getDocs(q);
			const tmp: DBProblem[] = [];
			querySnapshot.forEach((doc) => {
				tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
			});
			setProblems(tmp);
			setLoadingProblems(false);
		};

		getProblems();
	}, [setLoadingProblems]);
	return problems;
}

function getusedetailsonproblem(){
	const [user,setUser]=useState<any>(null)

  const fetchUserDetails = async (email:string|null) => {
    const db = getFirestore(app);
    const usersCollection = collection(db, 'users'); 
  
    const q = query(usersCollection, where('email', '==', email));
  
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
         
          const userData = doc.data();
          //console.log('User Details:', userData.solvedProblems);
          setUser(userData);
		  return user.solvedProblems;
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

  return user?.solvedProblems || null;

}

