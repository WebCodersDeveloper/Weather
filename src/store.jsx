import { configureStore,  } from "@reduxjs/toolkit";
import weatherSlice from "./feature/weatherSlice";

export const store = configureStore({
    reducer: {
        cart: weatherSlice
    }
});