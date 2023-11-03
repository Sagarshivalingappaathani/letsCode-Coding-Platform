import React, { useState } from 'react';
import { Problem } from '../data/types/problem';

type Solution = {
  id: number;
  name: string;
};

type Props = {
  problem: Problem;
};

const Solution: React.FC<Props> = ({ problem }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(error => console.error('Copy failed: ', error));
  };

  return (
    <div className="flex flex-col mx-auto max-w-screen-sm">
      <p className="text-blue-600 font-bold my-10 animate-bounce">
        Don't give up! Try tackling the problem once more. You're closer to the solution than you think!
      </p>
      {problem.solutioncode.map((code: Solution, index: number) => (
        <div key={code.id} className="p-4">
          <h3 className="bg-green-500 text-white p-2 rounded-tl-lg rounded-tr-lg mb-2 flex justify-between">
            <span>Solution in {index === 0 ? 'C++' : 'Java'}</span>
            <button
                onClick={() => handleCopyClick(code.name)}
                className="bg-white text-green-500 py-1 px-2 rounded hover:bg-white cursor-pointer"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
          </h3>
          <div className="bg-stone-800 p-4 rounded-bl-lg rounded-br-lg">
            <div className="flex justify-between items-center">
              <pre className="text-white">{code.name}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solution;
