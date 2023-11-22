import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



// const initialState = {
//   cartItems: [],
//   amount: 0,
//   total: 10,
//   isLoading: true,
//   dataBase: getData,
// };

export const getData = createAsyncThunk('getData', async (payload) => {
  return fetch('https://api.weatherapi.com/v1/current.json?key=039bd13ef4a1452a848141113230111&q=Toshkent&aqi=no')
  .then((res) => res.json())
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: {weather: [], status: ''},
  extraReducers: {
    [getData.pending] : (state, action) =>{
      state.status = 'pending';
    },
    [getData.fulfilled] : (state, {payload}) =>{
      state.status = 'succsess';
      state.weather = payload;
    },
    [getData.rejected] : (state, action) =>{
      state.status = 'failed'
    }
  }
});


export default cartSlice.reducer;