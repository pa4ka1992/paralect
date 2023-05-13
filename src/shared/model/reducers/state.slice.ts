import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacancy } from '../types';

interface IState {
  favorites: IVacancy[];
}

const initialState: IState = {
  favorites: []
};

export const stateSlice = createSlice({
  name: 'State',
  initialState,
  reducers: {
    setState(state, action: PayloadAction<IVacancy>) {
      state.favorites.push(action.payload);
    }
  }
});

export const stateActions = stateSlice.actions;

export const stateReducer = stateSlice.reducer;
