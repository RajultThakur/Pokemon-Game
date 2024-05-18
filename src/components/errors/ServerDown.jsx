// src/ServerDown.js

import React from 'react';

const ServerDown = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-6xl font-bold mb-4">500</h1>
      <p className="text-xl mb-8">Oops! Something went wrong. PokeAPI not responding :(</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-900"
      >
        Retry
      </button>
    </div>
  );
};

export default ServerDown;
