import { ActionIcon, TextInput } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FC, ChangeEvent } from 'react';
import { useAppActions, useAppSelector } from 'shared';

export const Searchbar: FC = () => {
  const { search } = useAppSelector((state) => state.stateReducer);
  const { setSkipQuery } = useAppActions();
  const { setSearch } = useAppActions();

  const changeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSkipQuery(true);
    setSearch(event.currentTarget.value);
  };

  const startSearch = () => {
    setSkipQuery(false);
  };

  return (
    <TextInput
      value={search}
      onChange={changeSearch}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon onClick={startSearch} size={32} radius="xl" variant="filled">
          <IconArrowRight size="1.1rem" stroke={1.5} />
        </ActionIcon>
      }
      placeholder="Search questions"
      rightSectionWidth={42}
    />
  );
};
