import { ThemeComponent } from '../types';

export const Paper: ThemeComponent = {
  defaultProps: {
    withBorder: true
  },

  styles: (theme) => ({
    root: {
      padding: theme.spacing.lg,
      borderRadius: theme.radius.lg
    }
  })
};
