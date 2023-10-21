// pages/profile.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Legend } from 'recharts';

const profileData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  createdAt: 'October 1, 2022',
  solvedProblems: {
    easy: 1,
    medium: 1,
    hard: 1,
  },
};

const pieData = [
  { name: 'Easy', value: profileData.solvedProblems.easy },
  { name: 'Medium', value: profileData.solvedProblems.medium },
  { name: 'Hard', value: profileData.solvedProblems.hard },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const Profile = () => {
  return (
    <div className="container mx-auto mt-5 p-5 flex space-x-5 justify-center">
      <div className="card-prop w-1/3 mt-20 mr-15">
        <div className="image-prop rounded-full bg-white">
        </div>
        <div className="card-info-prop">
          <span>{profileData.name}</span>
          <p>{profileData.email}</p>
        </div>
      </div>

      <div className="w-2/3 p-4">
        <div className="mt-2">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl font-semibold text-indigo-700">Solved Problems</h2>
            <ul className="list-disc pl-6 mt-5">
                <li className="mb-2">
                <span className="font-medium text-green-600">Easy:</span> {profileData.solvedProblems.easy} problems
                </li>
                <li className="mb-2">
                <span className="font-medium text-yellow-600">Medium:</span> {profileData.solvedProblems.medium} problems
                </li>
                <li className="mb-2">
                <span className="font-medium text-red-600">Hard:</span> {profileData.solvedProblems.hard} problems
                </li>
            </ul>
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
