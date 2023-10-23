"use client"
import React, { useState, useEffect } from 'react'; 
import Image from 'next/image';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Legend } from 'recharts';
import { app } from '../../firebaseConfig'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const Profile = () => {

  const [user,setUser]=useState(null)

  const fetchUserDetails = async (email) => {
    const db = getFirestore(app);
    const usersCollection = collection(db, 'users'); 
  
    const q = query(usersCollection, where('email', '==', email));
  
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
         
          const userData = doc.data();
          console.log('User Details:', userData);
          setUser(userData);
        });
      } else {
        console.log('No user found with this email.');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  
  useEffect(() => {
    const auth = getAuth(app);
  
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userEmail = currentUser.email;
        fetchUserDetails(userEmail);
      } else {
        setUser(null);
      }
    });
  
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
              alt="logo"
              width={180}
              height={90}
              className="object-contain rounded-full"
            />
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
                <h2 className="text-2xl font-semibold text-center text-indigo-700 lg:w-1/3 lg:pr-6">
                  Solved Problems
                </h2>
              </div>
              
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
                  </li>
                </ul>
                <ul className="list-disc pl-6 mt-5 lg:w-2/3">
                  {user?.solvedProblems.map((problem, index) => (
                    <li className="mb-2" key={index}>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
