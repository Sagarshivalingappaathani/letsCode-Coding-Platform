import React from 'react';
import Image from 'next/image';

const Courses: React.FC = () => {
  return (
    <div className="my-10 mx-20">
    <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center my-10">Unlock Your Potential</h2>
    <div className="flex flex-col items-center mx-20 md:flex-row md:justify-center md:space-x-10 mt-10">
      <div className="card md:w-1/3">
        <svg xmlns="http://www.w3.org/2000/svg" width="306" height="344.35" viewBox="0 0 306 344.35" className="App-logo">
            <path d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.140c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262" fill="#00599C"></path>
            <path d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193" fill="#004482"></path>
            <path d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.190c-7.287,4.208-13.249,14.536-13.249,23.650v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087" fill="#659AD2"></path>
            <g>
              <path d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175" fill="#131c25"></path>
            </g>
            <g>
              <polygon points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841" fill="#131c25"></polygon>
            </g>
            <g>
              <polygon points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841" fill="#131c25"></polygon>
            </g>
          </svg>
        <div className="header">Welcome to C++</div>
        <a href="/courses/cpp" className="App-button">Learn Now</a>
      </div>
      <div className="card md:w-1/3 mt-4 md:mt-0">
        <div className='my-5 rounded-lg'>
          <Image
            src="/assets/images/dsa.jpeg"
            alt="logo"
            width={250}
            height={90}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="header">Data Structures</div>
        <a href="/courses/dsa" className="App-button">Learn Now</a>
      </div>
      <div className="card md:w-1/3 mt-4 md:mt-0">
          <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512">
              <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
              <path fill="#25241c" d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
          </svg>
        <div className="header mx-5">
          <center> Welcome to Js</center>
        </div>
        <a href='/courses/js' className="App-button">Learn Now</a>
      </div>
    </div>
  </div>
  );
};

export default Courses;


