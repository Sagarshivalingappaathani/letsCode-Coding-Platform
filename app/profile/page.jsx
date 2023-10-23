"use client"
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Legend } from 'recharts';
import { app } from '../../firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import 'react-tooltip/dist/react-tooltip.css';
import './react-calender-heatmap.css'
=======
import React, { useState, useEffect } from 'react'; 
import Image from 'next/image';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Legend } from 'recharts';
import { app } from '../../firebaseConfig'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863

const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const Profile = () => {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const today = new Date();

  const fetchUserDetails = async (email) => {
    const db = getFirestore(app);
    const usersCollection = collection(db, 'users');

    const q = query(usersCollection, where('email', '==', email));

=======

  const [user,setUser]=useState(null)

  const fetchUserDetails = async (email) => {
    const db = getFirestore(app);
    const usersCollection = collection(db, 'users'); 
  
    const q = query(usersCollection, where('email', '==', email));
  
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
<<<<<<< HEAD
          const userData = doc.data();
          //console.log('User Details:', userData);
=======
         
          const userData = doc.data();
          console.log('User Details:', userData);
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
          setUser(userData);
        });
      } else {
        console.log('No user found with this email.');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
<<<<<<< HEAD

  useEffect(() => {
    const auth = getAuth(app);

=======
  
  useEffect(() => {
    const auth = getAuth(app);
  
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userEmail = currentUser.email;
        fetchUserDetails(userEmail);
      } else {
        setUser(null);
      }
    });
<<<<<<< HEAD

    return () => unsubscribe();
  }, []);

  const pieData = [
    { name: 'Easy', value: user?.solvedprob.easy || 1 },
    { name: 'Medium', value: user?.solvedprob.medium || 0 },
    { name: 'Hard', value: user?.solvedprob.hard || 0 },
  ];

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const [tooltipData, setTooltipData] = useState(null);

  const data = user?.ActivityInd;
  console.log(data)
  // Assuming your timestamp data is in the 'data' array
const simplifiedData = data?.map((timestamp) => {
  const dateFromTimestamp = new Date(timestamp.date.seconds * 1000);
  dateFromTimestamp.setHours(0, 0, 0, 0); // Set time to midnight
  const date = dateFromTimestamp.toISOString().split('T')[0]; // Extract date
  const count = timestamp.count || 0; // Extract count, default to 0 if not present
  return { date, count };
});

console.log(simplifiedData);


  // Create an array of dates within the specified range
const dateRange = [];
const currentDate = new Date(sixMonthsAgo);

while (currentDate <= today) {
  dateRange.push(new Date(currentDate));
  currentDate.setDate(currentDate.getDate() + 1);
}

const heatmapData = dateRange.map((date) => {
  // Find the corresponding count for each date
  const matchingData = simplifiedData?.find((d) => {
    if (d.date && date instanceof Date) {
      const dateFromTimestamp = new Date(d.date);
      dateFromTimestamp.setHours(0, 0, 0, 0);
      return dateFromTimestamp.toISOString().split('T')[0] === date.toISOString().split('T')[0];
    }
    return false;
  });

  return {
    date: date.toISOString().split('T')[0], // Extract the date in 'YYYY-MM-DD' format
    count: matchingData ? matchingData.count : 0,
  };
});


  const handleMouseOver = (event, value) => {
    setTooltipData(value);
  };

  const handleMouseLeave = () => {
    setTooltipData(null);
  };

  const getClassForValue = (value) => {
    if (value && value.count) {
      if (value.count <= 1) {
        return 'color-low';
      } else if (value.count <= 5) {
        return 'color-medium';
      } else {
        return 'color-high';
      }
    }
    return 'color-empty'; // Return a default class if there's no valid count.
  };

  const formatDate = (date) => {
    return date instanceof Date ? date.toLocaleDateString() : '';
  };
  
    
  return (
    <div className="container mx-auto mt-5 p-5 flex space-x-5 justify-center">
      <div className="mr-10">
        <div className="card-prop w-1/3 my-2 mr-15 bg-white p-4 rounded-lg shadow-md lg:items-center">
          <div className="image-prop rounded-full bg-white">
            <Image
              src="/assets/images/avatar.png"
=======
  
    return () => unsubscribe(); 
  }, []);

  const pieData = [
    { name: 'Easy', value: user?.solvedprob.easy || 1},
    { name: 'Medium', value: user?.solvedprob.medium || 0},
    { name: 'Hard', value: user?.solvedprob.hard || 0},
  ];


  return (
    <div className="container mx-auto mt-5 p-5 flex space-x-5 justify-center">
      <div className="card-prop w-1/3 mt-20 mr-15">
        <div className="image-prop rounded-full bg-white">
          <Image
              src="/assets/images/avatar.png" 
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
              alt="logo"
              width={180}
              height={90}
              className="object-contain rounded-full"
            />
<<<<<<< HEAD
          </div>
          <div className="card-info-prop">
            <span>{user?.displayName}</span>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="mt-2 bg-white p-2 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-2">
            Problem Distribution
          </h2>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  fill="#8884d8"
                  paddingAngle={5}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Legend align="center" iconSize={12} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="w-2/3 mt-2">
        <div className="p-4">
          <div className="mt-2">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 lg:items-center">
              <div className="">
=======
        </div>
        <div className="card-info-prop">
          <span>{user?.displayName}</span>
          <p>{user?.email}</p>
        </div>
      </div>

      <div className="w-2/3 p-4">
        <div className="mt-2">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 lg:items-center">
              <div className=''>
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
                <h2 className="text-2xl font-semibold text-center text-indigo-700 lg:w-1/3 lg:pr-6">
                  Solved Problems
                </h2>
              </div>
<<<<<<< HEAD
              <div className="flex flex-row">
                <ul className="list-disc pl-6 mt-5 lg:w-2/3">
                  <li className="mb-2">
                    <span className="font-medium text-green-600">Easy:</span> {user?.solvedprob.easy} problems
                  </li>
                  <li className="mb-2">
                    <span className="font-medium text-yellow-600">Medium:</span> {user?.solvedprob.medium} problems
                  </li>
                  <li className="mb-2">
                    <span className="font-medium text-red-600">Hard:</span> {user?.solvedprob.hard} problems
=======
              
              <div className='flex flex-row'>
                <ul className="list-disc pl-6 mt-5 lg:w-2/3">
                  <li className="mb-2">
                    <span className="font-medium text-green-600">Easy:</span>{' '}
                    {user?.solvedprob.easy} problems
                  
                  </li>
                  <li className="mb-2">
                    <span className="font-medium text-yellow-600">Medium:</span>{' '}
                    {user?.solvedprob.medium} problems
                  </li>
                  <li className="mb-2">
                    <span className="font-medium text-red-600">Hard:</span>{' '}
                    {user?.solvedprob.hard} problems
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
                  </li>
                </ul>
                <ul className="list-disc pl-6 mt-5 lg:w-2/3">
                  {user?.solvedProblems.map((problem, index) => (
                    <li className="mb-2" key={index}>
<<<<<<< HEAD
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mt-2">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 lg:items-center">
              <div className="">
                <h2 className="text-2xl mb-5 font-semibold text-center text-indigo-700 lg:w-1/3 lg:pr-6">Activity Indicator</h2>
              </div>
              <div className='heatmap-container' style={{ width: '100%', height: 300}}>
                <CalendarHeatmap
                  startDate={sixMonthsAgo}
                  endDate={today}
                  values={heatmapData}
                  classForValue={getClassForValue}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  />
                  {tooltipData && (
                    <div className="custom-tooltip">
                      Date: {tooltipData.date} - Count: {tooltipData.count}
                    </div>
                  )}
              </div>
            </div>
          </div>
=======
                      {problem} 
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="mt-5 bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">Problem Distribution</h2>
            <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    label
                    >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                    </Pie>
                    <Legend align="center" iconSize={12} iconType="circle" />
                </PieChart>
            </ResponsiveContainer>
            </div>
            </div>
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
        </div>
      </div>
    </div>
  );
};

export default Profile;
