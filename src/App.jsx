import React, { useState } from 'react';
import './index.css';
import WelcomeScreen from './components/WelcomeScreen';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } font-funky-2 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-1`}
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-full z-50 max-sm:right-1 w-10 h-10"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <WelcomeScreen/>
    </div>
  );
}

export default App;
