import { MantineProvider, MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  lineHeight: '20px',
  primaryColor: 'blue',
  loader: 'dots',
  fontSizes: {
    xl: '28px',
    lg: '24px',
    md: '20px',
    sm: '16px',
    xs: '14px'
  },
  colors: {
    white: ['#FFFFFF']
  }
};

export const withMantine = (component: () => React.ReactNode) => () =>
  (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {component()}
    </MantineProvider>
  );
