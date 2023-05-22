import { Box, Loader as MantineLoader } from '@mantine/core';
import { FC } from 'react';
import { useMatchBreakPoints } from '../../model/hooks';

export const Loader: FC = () => {
  const { isMatches } = useMatchBreakPoints('sm');

  return (
    <Box pos="absolute" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
      <MantineLoader size={isMatches ? 'lg' : 'md'} />
    </Box>
  );
};
