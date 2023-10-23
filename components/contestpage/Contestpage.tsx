import React,{useState} from 'react';
import Split from 'react-split';
import '../../styles/global.css';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import ProblemGround from './CodeboxContest/Playground';
import { Problem } from '../../data/types/problem'; 

type Props = {
  problem: Problem ; // Define the problem prop
  
};

const workSpace = (props: Props) => {
  const [time,settime]=useState<number>(0);
  return (
    <>
      <main className="w-full ">
          <Split className='split' minSize={0}>
            <ProblemDescription problem={props.problem} time={time} settime={settime}/>
            <ProblemGround problem={props.problem} time={time} settime={settime}/>
          </Split>
      </main>
    </>
  );
};

export default workSpace;



