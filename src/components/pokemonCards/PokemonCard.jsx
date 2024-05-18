import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNextCard,
  fetchNextPokemon,
  likedMyPokemon,
} from '../../store/slices/pokemon.slice';
import { IMAGE_URL } from '../../utils/constant';

const PokemonCard = () => {
  const [animationClass, setAnimationClass] = useState('');

  const dispatch = useDispatch();
  const { currentPokemon } = useSelector((state) => state.pokemon);
  const { id, name, abilities, types } =
    currentPokemon !== null && currentPokemon;

  const handleLikeAndDislike = async (like = false) => {
    if (like) {
      dispatch(likedMyPokemon(currentPokemon));
    }
    setAnimationClass('swipe-out');
    setTimeout(() => {
      dispatch(createNextCard());
      setAnimationClass('swipe-in');
    }, 200);
    dispatch(fetchNextPokemon());
  };

  return (
    <div
      className={`h-[460px] flex items-center justify-center bg-white border-gray-600 border-[2px] dark:border-white dark:bg-gray-700 transition-colors duration-500 flex-col max-w-[20rem] rounded-lg shadow-gray-400 shadow-xl dark:shadow-none py-4 ${animationClass}`}
    >
      <img
        src={`${IMAGE_URL}/${id}.svg`}
        alt={name}
        className="w-40 h-40 mx-auto"
      />
      <h2 className="text-2xl font-bold mt-4 capitalize dark:text-white transition-colors duration-500">
        {name}
      </h2>

      <ul className="mt-2 px-2 max-w-[300px] list-inside flex flex-wrap gap-2 items-center justify-center">
        {abilities.map((ability, index) => (
          <li
            key={index}
            className="dark:text-gray-300 bg-yellow-500 dark:bg-yellow-900 w-max px-3 border-black dark:border-white border-[2px] text-lg rounded-lg transition-colors duration-500"
          >
            {ability.ability.name}
          </li>
        ))}

        {types.map((type, index) => (
          <li
            key={index}
            className="dark:text-gray-300 dark:bg-cyan-700 bg-cyan-500 w-max px-3 text-lg border-black border-[2px] dark:border-white rounded-lg transition-colors duration-500"
          >
            {type.type.name}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between w-full px-3 text-black dark:text-white font-semibold">
        <button
          className="bg-green-700 py-2 px-4 rounded"
          onClick={() => handleLikeAndDislike(true)}
        >
          Like
        </button>
        <button
          className="bg-red-400 py-2 px-4 rounded"
          onClick={() => handleLikeAndDislike()}
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
