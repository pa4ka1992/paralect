import { ThemeComponent } from '../types';

export const Loader: ThemeComponent = {
  defaultProps: (theme) => ({
    color: theme.colors.blues[1],
    size: 'lg',
    pos: 'absolute',
    top: '50%',
    right: '50%'
  })
};
