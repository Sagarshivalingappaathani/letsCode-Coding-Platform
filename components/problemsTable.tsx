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
<<<<<<< HEAD
	//console.log(problems)
	const userDetails=getusedetailsonproblem();
=======
<<<<<<< HEAD
	//console.log(problems)
	const userDetails=getusedetailsonproblem();
=======
<<<<<<< HEAD
	const userDetails=getusedetailsonproblem();
=======
<<<<<<< HEAD
	const userDetails=getusedetailsonproblem();
=======
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
	
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
<<<<<<< HEAD
							{userDetails && userDetails.find((element: string) => element === problem.id) ? (
								<div className="text-center" style={{ background: 'linear-gradient(45deg, #0CA750, #3AA34D)', color: 'white', borderRadius: '0.25rem', width:"100px"}}>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
							{userDetails.find((element: string) => element === problem.id) ? (
								<div className="text-center" style={{ background: 'linear-gradient(45deg, #0CA750, #3AA34D)', color: 'white', borderRadius: '0.25rem', padding: '0.5rem' ,width:"130px"}}>
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
								completed
								</div>
							) : (
								<div>
								<Link
									className='hover:text-blue-600 cursor-pointer'
									href={`/problems/${problem.id}`}
								>
<<<<<<< HEAD
									<div className="text-center" style={{ background: 'linear-gradient(45deg, #FFA500, #FF6347)', color: 'white', borderRadius: '0.25rem',width:"100px" }}>
=======
									<div className="text-center" style={{ background: 'linear-gradient(45deg, #FFA500, #FF6347)', color: 'white', borderRadius: '0.25rem', padding: '0.5rem',width:"130px" }}>
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
									do it Now
									</div>
								</Link>
								</div>
							)}
							</td>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2

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
<<<<<<< HEAD
	useEffect(() => {
		const getProblems = async () => {
=======
<<<<<<< HEAD
	useEffect(() => {
		const getProblems = async () => {
=======
<<<<<<< HEAD
	useEffect(() => {
		const getProblems = async () => {
=======
<<<<<<< HEAD
	useEffect(() => {
		const getProblems = async () => {
=======
	console.log(loadingProblems)
	useEffect(() => {
		const getProblems = async () => {
			// fetching data logic
			console.log(loadingProblems)
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
			setLoadingProblems(true);
			const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
			const querySnapshot = await getDocs(q);
			const tmp: DBProblem[] = [];
			querySnapshot.forEach((doc) => {
				tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
			});
			setProblems(tmp);
			setLoadingProblems(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
			console.log(loadingProblems)
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
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

