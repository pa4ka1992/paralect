import { Button, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { FC, ChangeEvent } from 'react';
import { OutletProps, useAppActions, useAppSelector } from 'shared';

export const Searchbar: FC<{ isFetching: boolean; context?: OutletProps }> = ({ isFetching, context }) => {
  const { keyword } = useAppSelector((state) => state.filtersReducer.filtersState);
  const { setRequestParams, setKeyword } = useAppActions();

  const changeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFetching) {
      return;
    }

    setRequestParams();

    if (context) {
      context.handlers.close();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        data-elem="search-input"
        disabled={!!isFetching}
        value={keyword}
        onChange={changeSearch}
        icon={<IconSearch size="20px" stroke={2} />}
        size="lg"
        rightSection={
          <Button data-elem="search-button" disabled={!!isFetching} type="submit" size="xs">
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
