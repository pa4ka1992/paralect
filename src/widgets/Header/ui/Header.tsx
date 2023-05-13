import { FC } from 'react';
import { Container, Header as MantineHeader } from '@mantine/core';
import { LogoGroup } from 'entities';
import { Navbar } from 'features';

export const Header: FC = () => {
  return (
    <MantineHeader height={84} sx={{ borderBottom: 0 }}>
      <Container size="xl" sx={(theme) => ({ display: 'flex', gap: theme.spacing.sm, height: '100%' })}>
        <LogoGroup />
        <Navbar />
      </Container>
    </MantineHeader>
  );
};
