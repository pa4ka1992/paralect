import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestParams } from '../types';

type FiltersState = Omit<RequestParams, 'page'>;
interface IFilters {
  requestParams: RequestParams;
  filtersState: FiltersState;
}

const initialParams: FiltersState = {
  keyword: '',
  payment_from: '',
  payment_to: '',
  catalogues: ''
};

const initialState: IFilters = {
  requestParams: { ...initialParams, page: 1 },
  filtersState: initialParams
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.requestParams.page = action.payload;
    },

    setKeyword: (state, action: PayloadAction<string>) => {
      state.filtersState.keyword = action.payload;
    },

    setCatalogues: (state, action: PayloadAction<string>) => {
      state.filtersState.catalogues = action.payload;
    },

    setPaymentFrom: (state, action: PayloadAction<'' | number>) => {
      state.filtersState.payment_from = action.payload;
    },

    setPaymentTo: (state, action: PayloadAction<'' | number>) => {
      state.filtersState.payment_to = action.payload;
    },

    setRequestParams: (state) => {
      state.requestParams = { ...state.filtersState, page: 1 };
    },

    resetFilters: () => initialState
  }
});

export const filtersActions = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
