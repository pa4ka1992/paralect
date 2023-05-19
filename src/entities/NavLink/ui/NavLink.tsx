import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink as MantineNavLink, useMantineTheme } from '@mantine/core';

export const NavLink: FC<{ route: string; label: string }> = ({ route, label }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const isMatchingRoute = location.pathname === route;

  return (
    <MantineNavLink
      w="auto"
      c={isMatchingRoute ? 'blues.1' : undefined}
      fw={isMatchingRoute ? theme.other.fontWeight.medium : undefined}
      label={label}
      onClick={() => navigate(route)}
    />
  );
};
