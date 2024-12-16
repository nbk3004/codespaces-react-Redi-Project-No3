import React, { useState } from 'react';
import './Login.css';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleLogin = () => {
    if (name.trim()) {
      setUser({
        name,
        profilePicture: profilePicture.trim() || 'default-profile.jpg', // use default pic 
      });
    }
  };

  return (
    <div className="login">
      <h2>Welcome to My Twitter App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profile picture URL (optional)"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
