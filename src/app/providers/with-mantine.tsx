import { MantineProvider } from '@mantine/core';
import { theme } from '../api/mantine/mantine-theme';

export const withMantine = (component: () => React.ReactNode) => () =>
  (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {component()}
    </MantineProvider>
  );
