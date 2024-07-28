

import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'; // If using react-loading-skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles if using react-loading-skeleton
import './counselor.css';
import Neha from '../../assets/images/blogimages/neha.jpg';

const Counselor = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };






  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a delay of 2 seconds
  }, []);






  return (
    <div className="counselor">

{loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="skeleton-wrapper">
              <Skeleton height={30} width={200} />
              <Skeleton count={3} />
            </div>
          ))
        ) : (
       
<>

      
<h2>COUNSELLORS</h2>
      <div className="price" onClick={handleShowDetails} style={{ cursor: 'pointer' }}>
      <div className="counselor-card">
        <img src={Neha} alt="Neha Gupta" />
        <div className="counselor-info">
          <h3>Neha Gupta</h3>
          <p>Counselling Psychologist, Crisis Counsellor, Suicide Prevention Gatekeeper</p>
          <p>2 Years Experience</p>
          <div className="rating">👍 99%</div>
          <div className="languages">Hindi | English</div>
          <div className="languages"> <span>₹899</span></div>
           
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="counselor-details">
          <button className="close-btn" onClick={handleCloseDetails}>X</button>
          <div className="details-content">
            <h3>Neha Gupta</h3>
            <p>Full Details about Neha Gupta...</p>
            <p>  Counselling Psychologist, Crisis Counsellor, Suicide Prevention Gatekeeper. | 
            2 Years Experience</p>


      
        <h4>Bio:</h4>

          <p>  Rekindling minds to call upon their inner strength and light their way to live life; But Better !!! M. Sc in Counselling Psychology, Grief Therapist, Family and Marital Counsellor, Queer Affirmative Therapist, Crisis Counsellor, Social & Emotional Needs Counsellor, Expressive Art Therapist. With you in your journey of becoming the most authentic self !!!
          </p>
         
          </div>
        </div>
      )}







</>
          





        )}



    </div>
  );
};

export default Counselor;