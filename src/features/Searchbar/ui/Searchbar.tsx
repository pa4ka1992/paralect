import { Button, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { FC, ChangeEvent } from 'react';
import { useAppActions, useAppSelector } from 'shared';

export const Searchbar: FC = () => {
  const { search } = useAppSelector((state) => state.filtersReducer);
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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        startSearch();
      }}
    >
      <TextInput
        data-elem="search-input"
        value={search}
        onChange={changeSearch}
        icon={<IconSearch size="20px" stroke={2} />}
        size="lg"
        rightSection={
          <Button data-elem="search-button" type="submit" size="xs" onClick={startSearch}>
            Поиск
          </Button>
        }
        placeholder="Введите название вакансии"
        rightSectionWidth={105}
        styles={(theme) => ({
          input: { fontSize: theme.fontSizes.xs }
        })}
      />
    </form>
  );
};
