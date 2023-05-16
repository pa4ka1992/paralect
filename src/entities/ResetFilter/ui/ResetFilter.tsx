import { FC } from 'react';
import { Group, UnstyledButton, useMantineTheme } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useAppActions } from 'shared';

export const ResetFilter: FC = () => {
  const { resetFilters } = useAppActions();
  const theme = useMantineTheme();

  return (
    <Group
      c="whites.5"
      noWrap
      align="center"
      spacing="5px"
      sx={{
        '&:hover': { color: theme.colors.blues[2] },
        '&:active': {
          color: theme.colors.blues[1]
        }
      }}
    >
      <UnstyledButton fz="xs" onClick={() => resetFilters()} c="inherit">
        Сбросить все
      </UnstyledButton>
      <IconX size="15px" />
    </Group>
  );
};
