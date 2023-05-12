import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { type TAppDispatch, type TRootState } from 'app';
import { stateActions } from '../reducers';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const actions = {
  ...stateActions
};

const useAppActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};

export { useAppSelector, useAppActions };
