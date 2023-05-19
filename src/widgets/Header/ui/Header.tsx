import { FC } from 'react';
import { Container, Group, Header as MantineHeader } from '@mantine/core';
import { BurgerMenu, LogoGroup } from 'entities';
import { Navbar } from 'features';
import { OutletProps, useMatchBreakPoints } from 'shared';

export const Header: FC<{ context: OutletProps }> = ({ context }) => {
  const { isMatches } = useMatchBreakPoints('md');

  return (
    <MantineHeader pos="fixed" top="0" height={84} sx={{ borderBottom: 0 }}>
      <Container h="100%" size="xl">
        <Group h="100%" align="center" position="apart" spacing="sm" noWrap>
          <LogoGroup />
          {isMatches ? <Navbar /> : <BurgerMenu context={context} />}
        </Group>
      </Container>
    </MantineHeader>
  );
};
