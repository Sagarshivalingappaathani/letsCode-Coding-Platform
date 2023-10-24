"use client"
import Contest from "../../../components/contestpage/Contestpage";
import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import React, { useState } from "react";
import '../../../styles/global.css';

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
    )
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

export async function getStaticProps(context:any) {
  const dynamicSegment = context.params.id; // Assuming you're using dynamic routing with Next.js
  const problemData = problems[dynamicSegment];

  if (!problemData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      problem: problemData,
    },
  };
}

export default ProblemPage;
