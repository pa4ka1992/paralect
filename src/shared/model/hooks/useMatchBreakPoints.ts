import { useMantineTheme, getBreakpointValue, MantineSize } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useMatchBreakPoints = (breakpoint: MantineSize) => {
  const theme = useMantineTheme();
  const isMatches = useMediaQuery(`(min-width: ${getBreakpointValue(theme.breakpoints[breakpoint])}px)`);

  return { isMatches };
};
