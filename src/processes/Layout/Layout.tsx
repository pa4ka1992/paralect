import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets';

export const Layout: FC = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};
