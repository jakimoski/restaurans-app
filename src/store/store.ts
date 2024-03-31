import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favorites-slice";
import restaurantsSlice from "./restaurants-slice";

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    restaurants: restaurantsSlice.reducer,
  },
});

// Store and Dispatch types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
