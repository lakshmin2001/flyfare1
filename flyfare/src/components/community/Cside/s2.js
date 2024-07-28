import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'; // If using react-loading-skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles if using react-loading-skeleton
import './s2.css';

const S2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a delay of 2 seconds
  }, []);

  return (
    <div className="counselor2">
      <div className="App-header2">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="skeleton-wrapper">
              <Skeleton height={30} width={200} />
              <Skeleton count={3} />
            </div>
          ))
        ) : (
          <h1>Speak It Out!</h1>
        )}
      </div>
    </div>
  );
}

export default S2;
