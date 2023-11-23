import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
  'weather/fetch', 
  async () => {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=039bd13ef4a1452a848141113230111&q=Toshkent&aqi=no');
    return await response.json();
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    status: 'idle'
  },
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.data.push(action.payload);
      state.status = 'succeeded';
    },
    [fetchWeather.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default weatherSlice.reducer;