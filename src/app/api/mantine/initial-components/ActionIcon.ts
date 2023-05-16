import { ThemeComponent } from '../types';

export const ActionIcon: ThemeComponent = {
  styles: (theme) => ({
    root: {
      transition: 'all 0.1s',
      '&:hover': {
        color: theme.colors.blues[1],
        backgroundColor: theme.colors.whites[1]
      }
    }
  })
};
