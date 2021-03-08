import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/sidebarSlice";

export default configureStore({
    reducer: {
        toggleShow: sidebarReducer,
    },
    devTools: true,
})