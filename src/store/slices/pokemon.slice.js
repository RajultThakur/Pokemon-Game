import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomPokemon } from "../../utils/constant";
import { loadState, removeState, saveState } from "../../localStorage";

const storedLikedPokemon = loadState();

export const fetchCurrentPokemon = createAsyncThunk("pokemon/fetchCurrent", async (_, { rejectWithValue }) => {
    try {
        const data = await getRandomPokemon();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return rejectWithValue('Failed to fetch current Pokémon');
    }
});

export const fetchNextPokemon = createAsyncThunk("pokemon/fetchNext", async (_, { rejectWithValue }) => {
    try {
        const data = await getRandomPokemon();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return rejectWithValue('Failed to fetch next Pokémon');
    }
});

const initialState = {
    currentPokemon: null,
    nextPokemon: null,
    likedPokemon: storedLikedPokemon || [],
    isGameStarted: false,
    isError: null,
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        startGame: (state) => {
            state.isGameStarted = true;
        },
        createNextCard: (state) => {
            state.currentPokemon = state.nextPokemon;
        },
        likedMyPokemon: (state, action) => {
            const newValue = action.payload;
            if (!state.likedPokemon.find(value => value.name === newValue.name)) {
                state.likedPokemon.push(newValue);
                saveState(state.likedPokemon); 
            }
        },
        deleteAllLikedPokemon: (state) => {
            removeState();
            state.likedPokemon = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentPokemon.fulfilled, (state, action) => {
                state.currentPokemon = action.payload;
                state.isError = null; // Reset error on success
            })
            .addCase(fetchCurrentPokemon.rejected, (state, action) => {
                state.isError = action.payload || "Error while fetching current Pokémon data";
            })
            .addCase(fetchNextPokemon.fulfilled, (state, action) => {
                state.nextPokemon = action.payload;
                state.isError = null; // Reset error on success
            })
            .addCase(fetchNextPokemon.rejected, (state, action) => {
                state.isError = action.payload || "Error while fetching next Pokémon data";
            });
    }
});

export const { createNextCard, likedMyPokemon, startGame, deleteAllLikedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
