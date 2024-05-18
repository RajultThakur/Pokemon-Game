import React from 'react';
import { IMAGE_URL } from '../../utils/constant';

const LikedPokemonCard = ({ pokemon }) => {
  const {name, id} = pokemon;
  
  return (
    <div className="relative px-2 py-4 border-gray-600 border-[2px] dark:border-white rounded-lg shadow-md hover:shadow-lg bg-white dark:bg-gray-700 transition-colors duration-500 ">
        <img
          src={`${IMAGE_URL}/${id}.svg`}
          alt="not available"
          className="w-full text-center h-52 object-contain rounded"
        />
      <p className="text-xl text-center font-semibold ">{name}</p>
    </div>
  );
};

export default LikedPokemonCard;
