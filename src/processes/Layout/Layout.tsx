import { FC, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Container, Loader } from '@mantine/core';
import { Header } from 'widgets';
import { useGetAccessTokenQuery, LOCAL_STORAGE_NAMES } from 'shared';
import { ResponseError } from 'entities';

export const Layout: FC = () => {
  const { data, isLoading, isSuccess, isError } = useGetAccessTokenQuery({});

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem(LOCAL_STORAGE_NAMES.access_token, data.access_token);
    }
  }, [isSuccess, data]);

  if (isError) {
    return (
      <AppShell display="flex" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <ResponseError codeStatus="401" message="Апишка рипнулась, расходимся" />
      </AppShell>
    );
  }

  return (
    <AppShell
      header={<Header />}
      styles={{
        main: {
          paddingTop: '124px',
          paddingBottom: '44px'
        }
      }}
    >
      <Container h="100%" size="xl" pos="relative">
        <Suspense fallback={<Loader />}>{isLoading ? <Loader /> : <Outlet />}</Suspense>
      </Container>
    </AppShell>
  );
};
