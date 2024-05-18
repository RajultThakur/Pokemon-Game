import React from 'react';
import logo from '../assets/pokemon.png';

const WelcomeScreen = ({ start }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="text-center max-w-md">
        <img src={logo} alt="Pokémon" className="mx-auto mb-2   " />
        <div className="bg-white dark:bg-gray-800 py-8 px-4 rounded-lg shadow-lg transition-colors duration-500">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How to Play PokeSwipe
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Pokémon Appear One at a Time
            <br />
            Choose "Like" or "Dislike"
            <br />
            Build Your Favorite Team
          </p>
          <button
            onClick={start}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
          >
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
