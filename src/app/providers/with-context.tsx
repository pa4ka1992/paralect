import { LocalStorageService, StateContext } from 'shared';

export const withContext = (component: () => React.ReactNode) => () => {
  const initialContext = { localStorage: new LocalStorageService('paralect') };

  return <StateContext.Provider value={initialContext}>{component()}</StateContext.Provider>;
};
