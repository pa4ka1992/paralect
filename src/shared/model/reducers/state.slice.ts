import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  search: string;
  filters: {
    category: string;
    paymentFrom?: number | '';
    paymentTo?: number | '';
  };
  favorites: number[];
}

const initialState: IState = {
  search: '',
  filters: {
    category: '',
    paymentFrom: '',
    paymentTo: ''
  },
  favorites: []
};

export const stateSlice = createSlice({
  name: 'State',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      state.favorites.push(action.payload);
    },

    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((vacancyId) => {
        vacancyId !== action.payload;
      });
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
    }
  }
});

export const stateActions = stateSlice.actions;

export const stateReducer = stateSlice.reducer;
