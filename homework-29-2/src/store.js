import {configureStore} from "@reduxjs/toolkit";
import slicerList from "./redux/slicer/createSlicer.js";

export const store = configureStore({
    reducer: {
        list: slicerList,
    },
});
