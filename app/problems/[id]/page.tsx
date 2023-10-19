"use client";

import Workspace from "../../../components/ProblemPage/Problempage";
import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import React, { useEffect,useState } from "react";

type ProblemPageProps = {
	problem: Problem|null;
};

// getStaticProps => it fetch the data

function getStaticProps(id:string|undefined) {
  if(id!==undefined){
    const problem = problems[id];
    //problem.handlerFunction = problem.handlerFunction.toString();
    return problem
    
  }
}

const ProblemPage: React.FC<ProblemPageProps> = () => {

  const [problem, setProblem] = useState<Problem | null>(null);

  useEffect(() => {
    const dynamicSegment = window.location.pathname.split("/").pop();
    const problemData = getStaticProps(dynamicSegment);
    if (problemData) {
      setProblem(problemData);
    }
  }, []);

  if (!problem) {
		console.error("props.problem is null or undefined");
		return <div>No problem data available.</div>;
	  }
  

	return (
			<Workspace problem={problem} />
	);
};

export default ProblemPage;


