import { FC, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Container } from '@mantine/core';
import { Header } from 'widgets';
import { useGetAccessTokenQuery, LOCAL_STORAGE_NAMES } from 'shared';

export const Layout: FC = () => {
  const { data, isLoading, isSuccess } = useGetAccessTokenQuery({});

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem(LOCAL_STORAGE_NAMES.access_token, data.access_token);
    }
  }, [isSuccess, data]);

  return (
    <AppShell
      header={<Header />}
      styles={{
        main: {
          paddingTop: '124px'
        }
      }}
    >
      <Container size="xl">
        <Suspense fallback="loading...">{isLoading ? 'loading...' : <Outlet />}</Suspense>
      </Container>
    </AppShell>
  );
};
