import { FC } from 'react';
import { Box, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { Logo } from './assets';

export const LogoGroup: FC = () => {
  return (
    <NavLink to={'/'}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.sm,
          height: '100%'
        })}
      >
        <Logo />
        <Text size="lg" fw={600} ff="Poppins, sans-serif">
          Jobored
        </Text>
      </Box>
    </NavLink>
  );
};
