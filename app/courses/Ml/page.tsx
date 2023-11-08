import React from 'react';

const Ml: React.FC = () => {
  const navbarHeight = 90; // Replace with the actual height of your navbar

  const containerStyle = {
    height: `calc(100vh - ${navbarHeight}px)`,
    overflow: 'auto',
  };

  return (
    <div style={containerStyle}>
      <iframe
        src="/assets/CourseData/Ml.pdf"
        title="PDF Page"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          backgroundColor: 'white' // Remove iframe border
        }}
      />
    </div>
  );
};

export default Ml;
