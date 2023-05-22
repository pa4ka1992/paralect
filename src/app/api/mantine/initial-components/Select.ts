import { ThemeComponent } from '../types';

export const Select: ThemeComponent = {
  styles: (theme) => ({
    input: { fontSize: theme.fontSizes.xs },
    rightSection: { pointerEvents: 'none' },
    item: {
      whiteSpace: 'normal',
      '&:hover': {
        backgroundColor: theme.colors.blues[5]
      }
    },
    label: {
      marginBottom: '8px',
      fontWeight: theme.other.fontWeight.bold
    }
  })
};
