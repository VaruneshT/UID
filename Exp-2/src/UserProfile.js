// UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-overlay">
        <img src={user.profilePicture} alt="Profile" className="profile-image" />

        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-bio">{user.bio}</p>

        <div className="profile-contact">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
        </div>

        <div className="profile-social-links">
          <a href={user.linkedin} className="profile-link linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href={user.github} className="profile-link github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href={user.portfolio} className="profile-link portfolio" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i> Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
