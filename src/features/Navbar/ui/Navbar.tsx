import { Group, NavLink } from '@mantine/core';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <Group spacing={60} sx={{ flex: '1 1 100%', flexWrap: 'nowrap', justifyContent: 'center' }}>
      <NavLink fw={500} label="Поиск вакансий" sx={{ width: 'auto' }} />
      <NavLink fw={400} label="Избранное" sx={{ width: 'auto' }} />
    </Group>
  );
};
