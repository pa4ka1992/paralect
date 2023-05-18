import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestParams } from '../types';

interface IFilters {
  search: string;
  requestParams: RequestParams;
  filters: {
    catalogues: string;
    payment_from?: number | '';
    payment_to?: number | '';
  };
}

const initialParams: RequestParams = {
  keyword: '',
  payment_from: '',
  payment_to: '',
  catalogues: ''
};

const initialState: IFilters = {
  search: '',
  requestParams: initialParams,
  filters: {
    catalogues: '',
    payment_from: '',
    payment_to: ''
  }
};

const filtersSlice = createSlice({
  name: 'State',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setCatalogues(state, action: PayloadAction<string>) {
      state.filters.catalogues = action.payload;
    },

    setPaymentFrom(state, action: PayloadAction<'' | number>) {
      const { filters } = state;

      filters.payment_from = action.payload;
    },

    setPaymentTo(state, action: PayloadAction<'' | number>) {
      const { filters } = state;

      filters.payment_to = action.payload;
    },

    resetFilters(state) {
      state.filters = initialState.filters;
      state.requestParams = initialParams;
    },

    setRequestParams(state, action: PayloadAction<RequestParams>) {
      state.requestParams = action.payload;
    }
  }
});

export const filtersActions = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
