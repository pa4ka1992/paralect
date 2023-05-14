import { FC } from 'react';
import { Box, Text, Image } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';

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
        <Image height={30} width={30} src={logo} />
        <Text size="lg" fw={600} ff="Poppins, sans-serif">
          Jobored
        </Text>
      </Box>
    </NavLink>
  );
};
