import { FC } from 'react';
import { uid } from 'uid';
import { NavLink } from 'entities';
import { NAVIGATION } from '../constants';

export const Navbar: FC = () => {
  return (
    <>
      {NAVIGATION.map((link) => (
        <NavLink key={uid()} route={link.route} label={link.label} />
      ))}
    </>
  );
};
