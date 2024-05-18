import React, { useState, useEffect } from 'react';
import './index.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCurrentPokemon,
  fetchNextPokemon,
  startGame,
} from './store/slices/pokemon.slice';
import PokemonCard from "./components/pokemonCards/PokemonCard"
import WelcomeScreen from './components/WelcomeScreen';
const PATH = '/pokemon/favorite';

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();
  const { isGameStarted,isError } = useSelector((state) => state.pokemon);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    dispatch(fetchCurrentPokemon());
    dispatch(fetchNextPokemon());
  }, []);

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
      <Link to={location.pathname === PATH ? '/' : PATH}>
        <button
          className={`absolute top-4 left-4 bg-gray-800 dark:bg-gray-200 w-10 h-10
           rounded-full text-red-600 z-50  max-sm:left-1 `}
        >
          {location.pathname !== PATH ? '❤' : '🏠'}
        </button>
      </Link>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isGameStarted ? (
              <PokemonCard />
            ) : (
              <WelcomeScreen start={() => dispatch(startGame())} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;