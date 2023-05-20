import { ThemeComponent } from '../types';

export const Loader: ThemeComponent = {
  defaultProps: (theme) => ({
    display: 'inline-block',
    color: theme.colors.blues[1]
  })
};
