// Preloader.js

import React, { useState, useEffect } from 'react';
import './preloader.css'; // Import the CSS file for styling
import loader from './loading.gif'

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed (2 seconds in this case)

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader-container">
        {/* Add your preloader animation or message here */}
        <img className='loaderimage'src={loader} />
      </div>
    )
  );
};

export default Preloader;