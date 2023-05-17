import { ThemeComponent } from '../types';

export const NumberInput: ThemeComponent = {
  defaultProps: {
    type: 'number',
    step: 500
  },

  styles: (theme) => ({
    root: {
      '.mantine-NumberInput-input': {
        fontSize: theme.fontSizes.xs
      },

      '.mantine-NumberInput-control': {
        color: theme.colors.whites[6],
        cursor: 'pointer',
        '&:hover': {
          color: theme.colors.blues[2]
        },
        '&:active': {
          color: theme.colors.blues[0]
        }
      }
    }
  })
};
