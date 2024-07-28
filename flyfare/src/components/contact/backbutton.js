// src/components/BackButton/BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './backbutton.css'; // Import the CSS for styling

const BackButton = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <button className="back-button" onClick={handleBack}>
      ← Back
    </button>
  );
};

export default BackButton;
