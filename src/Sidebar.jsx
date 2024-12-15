import React, { useContext } from 'react';
import { AppContext } from './App';
import './Sidebar.css';

const Sidebar = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
 
  };

  return (
    <div className="sidebar">
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Sidebar;
