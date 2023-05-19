import { FC } from 'react';
import { Burger, Container, Flex, Group, Header as MantineHeader, MediaQuery } from '@mantine/core';
import { LogoGroup } from 'entities';
import { Navbar } from 'features';
import { OutletProps, useMatchBreakPoints } from 'shared';

export const Header: FC<{ context: OutletProps }> = ({ context }) => {
  const { isMatches } = useMatchBreakPoints('md');

  const { opened, handlers } = context;
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <MantineHeader pos="fixed" top="0" height={isMatches ? 84 : 60} sx={{ borderBottom: 0 }}>
      <Container h="100%" size="xl">
        <Group h="100%" align="center" position="apart" spacing="sm" noWrap>
          <LogoGroup />

          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Flex gap="60px" wrap="nowrap" align="center" justify="center" sx={{ flex: '1 1 100%' }}>
              <Navbar />
            </Flex>
          </MediaQuery>

          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Burger opened={opened} size="20px" onClick={handlers.toggle} aria-label={label} />
          </MediaQuery>
        </Group>
      </Container>
    </MantineHeader>
  );
};
