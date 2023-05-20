import { FC, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Container, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from 'widgets';
import {
  useGetAccessTokenQuery,
  LOCAL_STORAGE_NAMES,
  RESPONSE_STATUS,
  STATUS_MESSAGE,
  useMatchBreakPoints,
  ResponseError,
  Loader
} from 'shared';
import { NavbarDrawer } from 'features';

export const Layout: FC = () => {
  const [opened, handlers] = useDisclosure(false);
  const { isMatches } = useMatchBreakPoints('md');

  const { data, isLoading, isSuccess, isError } = useGetAccessTokenQuery(null);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem(LOCAL_STORAGE_NAMES.access_token, data.access_token);
    }
  }, [isSuccess, data]);

  if (isError) {
    return (
      <AppShell>
        <Flex align="center" justify="center" h="100%">
          <ResponseError codeStatus={RESPONSE_STATUS.unauthorized} message={STATUS_MESSAGE.unauthorized} />
        </Flex>
      </AppShell>
    );
  }

  return (
    <AppShell
      header={<Header context={{ opened, handlers }} />}
      navbar={<NavbarDrawer context={{ opened, handlers }} />}
      styles={{
        main: {
          paddingTop: isMatches ? '124px' : '90px',
          paddingBottom: isMatches ? '24px' : '14px'
        }
      }}
    >
      <Container p={isMatches ? 'md' : 0} h="100%" size="xl" pos="relative">
        <Suspense fallback={<Loader />}>{isLoading ? <Loader /> : <Outlet />}</Suspense>
      </Container>
    </AppShell>
  );
};
