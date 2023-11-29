import { createSlice } from '@reduxjs/toolkit';

let sunny = "https://usagif.com/wp-content/uploads/gifs/sun-47.gif"

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { 
    data: null,
    bgImage: ''
   },
  reducers: {
    setWeatherData(state, action) {
      state.data = action.payload;

      if(action.payload.current.condition.text === 'sunny') {
        state.bgImage = sunny;  
      }
    } 
  }
});

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;