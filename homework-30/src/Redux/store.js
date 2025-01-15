import {configureStore } from "@reduxjs/toolkit";
import createSlicer from "./slicer/createSlicer.js"

const store = configureStore({
    reducer: {
       userData:createSlicer,
    }
})
export default store;