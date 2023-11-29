import { configureStore,  } from "@reduxjs/toolkit";
import wwdata from "./feature/wdata";
import webBG from "./feature/webBG";
// import weatherSlice from "./feature/weatherSlice";

export const store = configureStore({
    reducer: {
        wwdata,
        webBG
    }
});