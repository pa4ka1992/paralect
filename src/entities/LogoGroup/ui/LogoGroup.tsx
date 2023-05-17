import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, useMantineTheme } from '@mantine/core';
import { ROUTES } from 'shared';
import { Logo } from './assets';

export const LogoGroup: FC = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Flex align="center" gap="sm" onClick={() => navigate(ROUTES.main)} sx={{ cursor: 'pointer' }}>
      <Logo />
      <Text
        size="lg"
        fw={theme.other.fontWeight.semibold}
        ff="Poppins, sans-serif"
        sx={{
          transition: 'all 0.1s',
          '&:hover': {
            color: theme.colors.whites[6]
          }
        }}
      >
        Jobored
      </Text>
    </Flex>
  );
};
