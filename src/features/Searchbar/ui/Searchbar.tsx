import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { FC, ChangeEvent } from 'react';
import { SearchButton } from 'entities';
import { DisclosureProps, useAppActions, useAppSelector, useMatchBreakPoints } from 'shared';

export const Searchbar: FC<{ isFetching: boolean; context?: DisclosureProps }> = ({ isFetching, context }) => {
  const { keyword } = useAppSelector((state) => state.filtersReducer.filtersState);
  const { setRequestParams, setKeyword } = useAppActions();

  const { isMatches } = useMatchBreakPoints('sm');

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
        icon={isMatches ? <IconSearch size="20px" stroke={2} /> : null}
        size={isMatches ? 'md' : 'sm'}
        rightSection={<SearchButton isFetching={isFetching} />}
        placeholder="Введите название вакансии"
        rightSectionWidth={isMatches ? 100 : 40}
        styles={(theme) => ({
          input: { fontSize: theme.fontSizes.xs }
        })}
      />
    </form>
  );
};
