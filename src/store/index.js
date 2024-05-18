import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root.reducer";

export const store = configureStore({
    reducer: rootReducers
});

export default store