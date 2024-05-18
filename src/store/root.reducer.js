import { combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemon.slice";

// if in future if you want to add any new reducers, just create new slice and add into the root reducer.
const rootReducers = combineReducers({
    pokemon: pokemonSlice
})

export default rootReducers