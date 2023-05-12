import { Provider } from 'react-redux';
import { setupStore } from '../model/store';

export const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={setupStore()}>{component()}</Provider>;
