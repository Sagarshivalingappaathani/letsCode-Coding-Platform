import { useEffect, useState } from "react";
import Contest from "../../../components/contestpage/Contestpage";
import { problems } from "../../../data/Problems/index";
import { Problem } from "../../../data/types/problem";
import '../../styles/global.css';

type ProblemPageProps = {
  problem: Problem | null;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  const [proload, setproload] = useState(false);

  useEffect(() => {
    // You can also fetch additional data here if needed

    if (!problem) {
      setproload(true);

      // Simulate a loading delay (remove this in production)
      setTimeout(() => {
        setproload(false);
      }, 1000);
    }
  }, [problem]);

  if (!problem) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mt-60">
        <span className="flex justify-center items-center loader"></span>
      </div>
    );
  }

  return (
    <>
      {proload && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mt-60">
          <span className="flex justify-center items-center loader"></span>
        </div>
      )}
      {!proload && <Contest problem={problem} />}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const dynamicSegment = context.params.id;
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
