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
<<<<<<< HEAD
import ProblemGround from './Codebox/Playground';
=======
<<<<<<< HEAD
import ProblemGround from './Codebox/Playground';
=======
<<<<<<< HEAD
import ProblemGround from './Codebox/Playground';
=======
import ProblemGround from './Playground/Playground';
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
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
