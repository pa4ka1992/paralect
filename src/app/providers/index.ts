import compose from 'compose-function';

import { withMantine } from './with-mantine';
import { withStore } from './with-store';
import { withContext } from './with-context';

export const withProviders = compose(withMantine, withStore, withContext);
