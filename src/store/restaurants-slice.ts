import { createSlice } from "@reduxjs/toolkit";
import { TRestaurant } from "../types/types";

export const fetchRestaurants = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/restaurants");

      const data = response.json();

      return data;
    };
    try {
      const restaurants = await fetchData();
      dispatch(restaurantsActions.updateRestaurants(restaurants));
    } catch (error) {
      console.log(error);
    }
  };
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [] as TRestaurant[],
  },
  reducers: {
    updateRestaurants(state, actions) {
      state.restaurants = actions.payload;
    },
  },
});

export const restaurantsActions = restaurantsSlice.actions;

export default restaurantsSlice;
