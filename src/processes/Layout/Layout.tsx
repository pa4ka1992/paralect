import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Container, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from 'widgets';
import { useMatchBreakPoints, Loader, useCheckAuth, ResponseError, RESPONSE_STATUS, STATUS_MESSAGE } from 'shared';
import { NavbarDrawer } from 'features';

export const Layout: FC = () => {
  const [opened, handlers] = useDisclosure(false);
  const { isMatches } = useMatchBreakPoints('md');

  const { isError, isLoading } = useCheckAuth();

  if (isError || isLoading) {
    return (
      <AppShell>
        <Flex align="center" justify="center" h="100%">
          {isError ? (
            <ResponseError codeStatus={RESPONSE_STATUS.unauthorized} message={STATUS_MESSAGE.unauthorized} />
          ) : (
            <Loader />
          )}
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </AppShell>
  );
};
