import React from 'react';
import { Problem } from '../data/types/problem';

type Solution = {
  id: number;
  name: string;
};

type Props = {
  problem: Problem;
};

const Solution: React.FC<Props> = ({ problem }) => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-sm">
     <p className="text-blue-600 font-bold my-10 animate-bounce ">
      Don't give up! Try tackling the problem once more. You're closer to the solution than you think!
    </p>
      {problem.solutioncode.map((code: Solution, index: number) => (
        <div key={code.id} className="p-4">
          <h3 className="bg-green-500 text-white p-2 rounded-tl-lg rounded-tr-lg mb-2">
            Solution in {index === 0 ? 'C++' : 'Java'}
          </h3>
          <div className="bg-stone-800 p-4 rounded-bl-lg rounded-br-lg">
            <pre className="text-white">{code.name}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solution;
