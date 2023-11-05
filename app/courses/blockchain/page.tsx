import React from 'react';

type Props = {};

const Page = (props: Props) => {
  const containerStyle = {
    height: 'calc(100vh - 90px)', // Adjust the navbar height as needed
    overflow: 'auto',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-red-600 font-semibold">Work in Progress</h1>
      <p className="text-lg text-gray-600">This page is under construction and will be available soon.</p>
    </div>
  );
};

export default Page;
