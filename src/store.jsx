import { configureStore,  } from "@reduxjs/toolkit";
import wwdata from "./feature/wdata";
// import weatherSlice from "./feature/weatherSlice";

export const store = configureStore({
    reducer: {
        wwdata
    }
});