"use client";

import Workspace from "../../../components/Workspace/Workspace";
import { problems } from "../../../utils/Problems/index";
import { Problem } from "../../../utils/types/problem";
import React, { useEffect,useState } from "react";

type ProblemPageProps = {
	problem: Problem;
};

// getStaticProps => it fetch the data

function getStaticProps(id:string|undefined) {
  if(id!==undefined){
    const problem = problems[id];
    problem.handlerFunction = problem.handlerFunction.toString();
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

  //console.log(problem)

	return (
			<Workspace problem={problem} />
	);
};

export default ProblemPage;


