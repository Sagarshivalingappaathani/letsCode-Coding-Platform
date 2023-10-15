"use client";
import { useState } from "react";
import ProblemsTable from "../../components/problemsTable";

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);

  return (
    <>
  <main className="no-inherit-width" style={{width: '100%'}}>
    <div className='elative overflow-x-auto px-6 pb-10'>
      <div className="w-full max-w-[1200px]">
        <table className="w-full ml-20">
          <thead className='text-dark text-left border-b'>
            <tr>
            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                No
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Title
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Difficulty
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Category
              </th>
              <th scope='col' className='px-1 py-3 w-0 font-medium'>
                Status
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Solution
              </th>
            </tr>
          </thead>
          <ProblemsTable/>
        </table>
      </div>
    </div>
  </main>
  </>
  );
}

// Rest of your code
