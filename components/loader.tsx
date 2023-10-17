import React from 'react';
import '../styles/global.css'

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="icon">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
        <div className="icon">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
    </div>
  );
}

export default Loader;
