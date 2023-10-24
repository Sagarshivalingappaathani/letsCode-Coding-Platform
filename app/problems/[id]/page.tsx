"use client";

import Workspace from "../../../components/ProblemPage/Problempage";
import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import React, { useEffect,useState } from "react";
import '../../../styles/global.css';

type ProblemPageProps = {
	problem: Problem|null;
};

// getStaticProps => it fetch the data

function getStaticProps(id:string|undefined) {
  if(id!==undefined){
    const problem = problems[id];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    //problem.handlerFunction = problem.handlerFunction.toString();
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
    return problem
    
  }
}

const ProblemPage: React.FC<ProblemPageProps> = () => {

  const [problem, setProblem] = useState<Problem | null>(null);
  const [proload,setproload]=useState<boolean>(true);

  useEffect(() => {
    const dynamicSegment = window.location.pathname.split("/").pop();
    const problemData = getStaticProps(dynamicSegment);
    if (problemData) {
      setProblem(problemData);
      setproload(false);
    }
  }, []);

  if (!problem) {
    return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="mt-60">
            <span className="flex justify-center items-center loader"></span>
          </div>
        )
	  }
  

	return (
      <>
        {proload && 
           (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="mt-60">
              <span className="flex justify-center items-center loader"></span>
            </div>
          )
        }
        {
          !proload && <Workspace problem={problem} />
        }
			  
      </>
	);
};

export default ProblemPage;


