import { createSlice } from '@reduxjs/toolkit';
import { useEffect, useReducer } from 'react';
import reducer from '../components/reducer';



const initialState = {
  cartItems: [],
  amount: 0,
  total: 10,
  isLoading: true,
  dataBase: getData,
};
const getData = () => {
  let url = 'https://api.weatherapi.com/v1/current.json?key=039bd13ef4a1452a848141113230111&q=Toshkent&aqi=no'
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: "DISPLAY", payload: data });
  };

  if (state.loading) {
    return <LoadingAnimation />
}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});


export default cartSlice.reducer;