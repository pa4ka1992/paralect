import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, useMantineTheme } from '@mantine/core';
import { ROUTES, useMatchBreakPoints } from 'shared';
import { Logo } from './assets';

export const LogoGroup: FC = () => {
  const navigate = useNavigate();

  const theme = useMantineTheme();
  const { isMatches } = useMatchBreakPoints('md');
  const logoSize = isMatches ? '30px' : '25px';

  return (
    <Flex align="center" gap="sm" onClick={() => navigate(ROUTES.main)} sx={{ cursor: 'pointer' }}>
      <Logo width={logoSize} height={logoSize} />
      <Text
        size={isMatches ? 'lg' : 'md'}
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
