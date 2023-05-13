import { createContext } from 'react';
import { LocalStorageService } from 'shared';

type Context = {
  localStorage: LocalStorageService;
};

export const StateContext = createContext<Context>({} as Context);
