import axios from "axios";

export const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon"

export const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'

export const getRandomNumber = (to, from) => {
    return Math.floor(Math.random() * from) + to;
}

export const getRandomPokemon = async () => {
    const randomId = getRandomNumber(2, 1000);
    const response = await axios.get(`${POKEAPI_URL}/${randomId}`);
    return response.data;
}