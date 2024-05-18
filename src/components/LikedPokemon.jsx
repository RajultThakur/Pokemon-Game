import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LikedPokemonCard from './pokemonCards/LikedPokemonCard';
import { Trash2 } from 'lucide-react';
import { deleteAllLikedPokemon } from '../store/slices/pokemon.slice';

const LikedPokemons = () => {
  const dispatch = useDispatch();
  const { likedPokemon } = useSelector((state) => state.pokemon);

  const deleteAll = () => {
    const sure = confirm('are you sure! you want to delete all cards');
    if (sure) {
      dispatch(deleteAllLikedPokemon());
    }
    return;
  };

  return (
    <div className="container mx-auto px-4 max-sm:px-1 h-screen overflow-y-scroll hideScrollBar dark:text-white :text-black">
      <button
        className="p-2 rounded-full bg-gray-700 text-red-600 border-[2px] absolute bottom-2 left-1 z-40"
        onClick={deleteAll}
        disabled={likedPokemon.length === 0}
      >
        <Trash2 />
      </button>

      <h1 className="text-3xl max-sm:text-xl font-bold text-center mb-4 py-4 sticky z-30 top-0 transition-colors duration-500 bg-gray-100 dark:bg-gray-900">
        Liked Pokémon
      </h1>
      {likedPokemon.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {likedPokemon.map((pokemon) => (
            <LikedPokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl my-auto">
          No collection available
        </div>
      )}
    </div>
  );
};

export default LikedPokemons;
