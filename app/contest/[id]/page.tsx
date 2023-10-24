// ./pages/contest/[id].tsx
"use client";

import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import ProblemPage from "../../../components/contestpage/ProblemsPage";

export async function getStaticProps(context: any) {
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
