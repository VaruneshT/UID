// App.js
import React from 'react';
import UserProfile from './UserProfile';
import './App.css'; // Import CSS for centering styles

const App = () => {
  const user = {
    name: "Varunesh T",
    profilePicture: "https://via.placeholder.com/120",
    bio: "Web Developer with a passion for creating amazing user experiences.",
    email: "varunesht.22it@kongu.edu",
    location: "Erode",
    linkedin: "https://www.linkedin.com/in/varunesh-t-853570259/",
    github: "https://github.com/VaruneshT",
    portfolio: "https://varunesh.netlify.app/",
  };

  return (
    <div className="app">
      <UserProfile user={user} />
    </div>
  );
};

export default App;
