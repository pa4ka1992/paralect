import { FC } from 'react';
import { Flex } from '@mantine/core';
import { NavLink } from 'entities';
import { NAVIGATION } from '../constants';

export const Navbar: FC = () => {
  return (
    <Flex gap="60px" wrap="nowrap" align="center" justify="center" sx={{ flex: '1 1 100%' }}>
      {NAVIGATION.map((link) => (
        <NavLink key={link.id} route={link.route} label={link.label} />
      ))}
    </Flex>
  );
};
