import { ThemeComponent } from '../types';

export const Button: ThemeComponent = {
  defaultProps: (theme) => ({
    fz: theme.fontSizes.xs,
    fw: theme.other.fontWeight.medium
  }),

  sizes: {
    sm: () => ({
      root: {
        height: '43px'
      }
    }),

    xs: () => ({
      root: {
        height: '35px',
        padding: '0 20px'
      }
    })
  },

  styles: (theme) => ({
    root: {
      lineHeight: '21px',
      transition: 'all 0.1s',
      '&:hover': {
        backgroundColor: theme.colors.blues[2]
      },

      '&:active': {
        backgroundColor: theme.colors.blues[0]
      }
    }
  })
};
