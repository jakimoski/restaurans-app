import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRestaurant } from "../types/types";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: (JSON.parse(localStorage.getItem("favorites") || `""`) ||
      []) as TRestaurant[],
  },
  reducers: {
    toggleFavorite(state, actions: PayloadAction<TRestaurant>) {
      const stateItems = [...state.favorites];
      const existingItem = stateItems.find(
        (item) => item.id === actions.payload.id
      );

      if (existingItem) {
        state.favorites = stateItems.filter(
          (item) => item.id !== existingItem.id
        );

        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else {
        state.favorites = [...stateItems, actions.payload];
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;
