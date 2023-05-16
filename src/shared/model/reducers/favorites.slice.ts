import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_NAMES } from 'shared/constants';

interface IFavorites {
  favorites: number[];
}

const favoritesPreload = localStorage.getItem(LOCAL_STORAGE_NAMES.favorites);

const initialState: IFavorites = {
  favorites: favoritesPreload ? JSON.parse(favoritesPreload) : []
};

const favoritesSlice = createSlice({
  name: 'State',
  initialState,
  reducers: {
    updateFavorites(state, action: PayloadAction<number>) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((vacancyId) => vacancyId !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }

      localStorage.setItem(LOCAL_STORAGE_NAMES.favorites, JSON.stringify(state.favorites));
    }
  }
});

export const favoritesActions = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
