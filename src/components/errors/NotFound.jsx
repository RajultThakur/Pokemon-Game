// src/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900 dark:text-white text-gray-800 bg-gray-100 transition-colors duration-500">
      <h1 className="text-6xl font-bold  mb-4">404</h1>
      <p className="text-xl text-gray-600 font-bold dark:text-gray-100  mb-8 transition-colors duration-500">
        Page Not Found
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
