"use client";
import { useState } from "react";
import ProblemsTable from "../../components/problemsTable";
import "../../styles/global.css"

export default function Home() {

  const [loadingProblems, setLoadingProblems] = useState(true);

  return (
    
  
  <main className="no-inherit-width mt-10" style={{width: '100%'}}>
    {
      loadingProblems && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="mt-60">
          <span className="flex justify-center items-center loader"></span>
        </div>
      )
    }

    <div className='elative overflow-x-auto px-6 pb-10 flex justify-center'>
      <div className="w-full max-w-[1200px]">
        <table className="w-full ml-20">
        {!loadingProblems &&(
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
                </thead>)}<ProblemsTable loadingProblems={loadingProblems} setLoadingProblems={setLoadingProblems} />
        </table>
      </div>
    </div>
  </main>
  );
}

