import React, { useContext } from 'react';
import { AppContext } from './App';
import './Profile.css';

const Profile = () => {
  const { user } = useContext(AppContext);

  const handleImageError = (e) => {
    e.target.src = 'default-profile.jpg'; // Replace with the path to your fallback image
  };

  return (
    <div className="profile">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        onError={handleImageError}
      />
      <h2>{user.name}</h2>
    </div>
  );
};

export default Profile;
