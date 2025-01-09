import {configureStore} from "@reduxjs/toolkit";
import counters from "../redux/slice/counterSlice.js";

export const store = configureStore({
    reducer: {
        counter: counters.reducer,
    }
});