import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilters {
  search: string;
  skipQuery: boolean;
  filters: {
    category: string;
    paymentFrom?: number | '';
    paymentTo?: number | '';
  };
}

const initialState: IFilters = {
  search: '',
  skipQuery: false,
  filters: {
    category: '',
    paymentFrom: '',
    paymentTo: ''
  }
};

const filtersSlice = createSlice({
  name: 'State',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setCategory(state, action: PayloadAction<string>) {
      state.filters.category = action.payload;
    },

    setPaymentTo(state, action: PayloadAction<'' | number>) {
      const { filters } = state;

      filters.paymentTo = action.payload;

      if (+filters.paymentTo > +(filters.paymentFrom || 0)) {
        filters.paymentFrom = action.payload;
      }
    },

    setPaymentFrom(state, action: PayloadAction<'' | number>) {
      const { filters } = state;

      filters.paymentFrom = action.payload;

      if (+filters.paymentFrom < +(filters.paymentTo || 0)) {
        filters.paymentTo = action.payload;
      }
    },

    resetFilters(state) {
      state.filters = initialState.filters;
      state.skipQuery = false;
    },

    setSkipQuery(state, action: PayloadAction<boolean>) {
      state.skipQuery = action.payload;
    }
  }
});

export const filtersActions = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
