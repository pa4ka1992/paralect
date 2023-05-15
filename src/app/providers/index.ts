import compose from 'compose-function';

import { withMantine } from './with-mantine';
import { withStore } from './with-store';

export const withProviders = compose(withMantine, withStore);
