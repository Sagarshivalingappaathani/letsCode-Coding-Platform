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
    <><div style={containerStyle}>
          <iframe
              src="https://gamma.app/embed/xb0l4orkiyi39aj"
              style={iframeStyle}
              allow="fullscreen"
              title="Blockchain: Revolutionizing the Digital World"
          ></iframe>
         <div className="rounded-sm absolute bottom-7 right-6 w-52 h-8 bg-gradient-to-r from-indigo-700 to-indigo-900"><span className='flex align-middle justify-center mt-1 text-white'><a href="https://www.blockchain.com/">LearnMore</a></span></div>
      </div></>
  );
};

export default Page;
