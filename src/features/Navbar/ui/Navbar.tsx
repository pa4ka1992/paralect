import { Group, NavLink } from '@mantine/core';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <Group spacing={60} sx={{ flex: '1 1 100%', flexWrap: 'nowrap', justifyContent: 'center' }}>
      <NavLink fw={500} label="Поиск вакансий" sx={{ width: 'auto' }} onClick={() => navigate('/')} />
      <NavLink fw={500} label="Избранное" sx={{ width: 'auto' }} onClick={() => navigate('/favorites')} />
    </Group>
  );
};
