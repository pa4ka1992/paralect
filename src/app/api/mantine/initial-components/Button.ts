import { ThemeComponent } from '../types';

export const Button: ThemeComponent = {
  defaultProps: (theme) => ({
    fz: theme.fontSizes.xs,
    fw: theme.other.fontWeight.medium
  }),

  variants: {
    favorites: (theme) => ({
      root: {
        color: theme.colors.blues[1],
        backgroundColor: theme.colors.blues[5],
        '&:hover': {
          backgroundColor: theme.colors.blues[4]
        },

        '&:active': {
          backgroundColor: theme.colors.blues[3]
        }
      }
    })
  },

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
