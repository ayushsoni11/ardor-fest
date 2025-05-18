import React from 'react';
import './MyProfile.css';
import Navbar from '@/components/LandingPage/Navbar';

const MyProfile = () => {
  // Assuming 'user' prop is passed with { fullName, email, profilePic }
     const storedUser = localStorage.getItem("loginuser");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

  return (
    <>
    <Navbar />
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={loggedInUser.profilePic} alt={loggedInUser.username} />
        </div>
        <div className="profile-details">
          <h2>{loggedInUser.username}</h2>
          <p>{loggedInUser.email}</p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default MyProfile;

