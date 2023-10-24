// ./components/contestpage/ProblemPage.tsx
import React, { useState } from "react";
import Contest from "./Contestpage";
import '../../../styles/global.css';
import { Problem } from "../../data/types/problem";

type ProblemPageProps = {
  problem: Problem | null;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  const [proload, setproload] = useState(false);

  if (!problem) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mt-60">
        <span className="flex justify-center items-center loader"></span>
      </div>
    );
  }

  return (
    <>
      {proload &&
        (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mt-60">
            <span className="flex justify-center items-center loader"></span>
          </div>
        )
      }
      {
        !proload && <Contest problem={problem} />
      }
    </>
  );
};

export default ProblemPage;
