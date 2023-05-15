import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_NAMES } from 'shared/constants';

interface IState {
  search: string;
  skipQuery: boolean;
  filters: {
    category: string;
    paymentFrom?: number | '';
    paymentTo?: number | '';
  };
  favorites: number[];
}

const favoritesPreload = localStorage.getItem(LOCAL_STORAGE_NAMES.favorites);

const initialState: IState = {
  search: '',
  skipQuery: false,
  filters: {
    category: '',
    paymentFrom: '',
    paymentTo: ''
  },
  favorites: favoritesPreload ? JSON.parse(favoritesPreload) : []
};

export const stateSlice = createSlice({
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
    },

    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setCategory(state, action: PayloadAction<string>) {
      state.filters.category = action.payload;
    },

    setPaymentTo(state, action: PayloadAction<'' | number>) {
      state.filters.paymentTo = action.payload;
    },

    setPaymentFrom(state, action: PayloadAction<'' | number>) {
      state.filters.paymentFrom = action.payload;
    },

    resetFilters(state) {
      state.filters = initialState.filters;
    },

    setSkipQuery(state, action: PayloadAction<boolean>) {
      state.skipQuery = action.payload;
    }
  }
});

export const stateActions = stateSlice.actions;

export const stateReducer = stateSlice.reducer;
