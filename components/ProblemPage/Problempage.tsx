import React from 'react';
import Split from 'react-split';
import '../../styles/global.css';
import ProblemDescription from './ProblemDescription/Problemdescription';
<<<<<<< HEAD
import ProblemGround from './Codebox/Playground';
=======
<<<<<<< HEAD
import ProblemGround from './Codebox/Playground';
=======
import ProblemGround from './Playground/Playground';
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
import { Problem } from '../../data/types/problem'; // Import the Problem type
import { problems } from '../mockProblems/mockProblems';

type Props = {
  problem: Problem ; // Define the problem prop
};

const workSpace = (props: Props) => {
  return (
    <>
      <main className="w-full ">
          <Split className='split' minSize={0}>
            <ProblemDescription problem={props.problem} />
            <ProblemGround problem={props.problem} />
          </Split>
      </main>
    </>
  );
};

export default workSpace;
