import { ActionIcon, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';
import { useMatchBreakPoints } from 'shared';

export const SearchButton: FC<{ isFetching: boolean }> = ({ isFetching }) => {
  const { isMatches } = useMatchBreakPoints('sm');

  if (isMatches) {
    return (
      <Button data-elem="search-button" disabled={!!isFetching} type="submit" size="xs">
        Поиск
      </Button>
    );
  }

  return (
    <ActionIcon c="whites.5" disabled={!!isFetching}>
      <IconSearch size="20px" stroke={2} />
    </ActionIcon>
  );
};
