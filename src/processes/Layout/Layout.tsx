import { FC, Suspense, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Container } from '@mantine/core';
import { Header } from 'widgets';
import { StateContext, useGetAccessTokenQuery } from 'shared';

export const Layout: FC = () => {
  const { data, isLoading, isSuccess } = useGetAccessTokenQuery({});
  const { localStorage } = useContext(StateContext);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('access_token', data.access_token);
    }
  }, [isSuccess, data, localStorage]);

  return (
    <AppShell>
      <Header />
      <Container size="xl">
        <Suspense fallback="loading...">{isLoading ? 'loading...' : <Outlet />}</Suspense>
      </Container>
    </AppShell>
  );
};
