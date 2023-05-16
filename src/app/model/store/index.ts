import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { filtersReducer, favoritesReducer, superJobAPI } from 'shared';

const rootReducer = combineReducers({
  filtersReducer,
  favoritesReducer,
  [superJobAPI.reducerPath]: superJobAPI.reducer
});

export const setupStore = (preloadedState?: PreloadedState<TRootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(superJobAPI.middleware)
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
