import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink as MantineNavLink } from '@mantine/core';

export const NavLink: FC<{ route: string; label: string }> = ({ route, label }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <MantineNavLink
      c={location.pathname === route ? 'blues.1' : undefined}
      label={label}
      onClick={() => navigate(route)}
    />
  );
};
