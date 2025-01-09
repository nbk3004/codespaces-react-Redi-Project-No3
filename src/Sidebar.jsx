import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AppContext } from './App';
import './Sidebar.css';

const Sidebar = () => {
  const { theme, setTheme, setUser } = useContext(AppContext);
  const navigate = useNavigate(); // Get the navigate function

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    setUser(null); // Log out the user
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="sidebar">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <button onClick={handleLogout} className="logout-button">
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
