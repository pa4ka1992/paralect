import { FC } from 'react';
import { Flex, Loader, Stack } from '@mantine/core';
import { Searchbar } from 'features';
import { Filters, Sidebar, VacanciesOverview } from 'widgets';
import {
  RESPONSE_STATUS,
  STATUS_MESSAGE,
  useAppActions,
  useAppSelector,
  useMatchBreakPoints,
  useSearchVacanciesQuery
} from 'shared';
import { ResponseError } from 'entities';

export const Main: FC = () => {
  const { isMatches } = useMatchBreakPoints('md');

  const { requestParams } = useAppSelector((state) => state.filtersReducer);
  const { setPage } = useAppActions();

  const { data: searchResult, isFetching, isError } = useSearchVacanciesQuery(requestParams);

  if (isError) {
    return <ResponseError codeStatus={RESPONSE_STATUS.serverError} message={STATUS_MESSAGE.serverError} />;
  }

  return (
    <Flex align="flex-start" wrap="nowrap" gap="xl" h="100%">
      {isMatches ? <Filters isFetching={isFetching} /> : <Sidebar isFetching={isFetching} />}

      <Stack sx={{ flex: '1 1 auto' }} h="100%" pos="relative">
        <Searchbar isFetching={isFetching} />
        {isFetching ? (
          <Loader />
        ) : (
          <VacanciesOverview
            vacancies={searchResult}
            isFetching={isFetching}
            page={requestParams.page}
            setPage={setPage}
          />
        )}
      </Stack>
    </Flex>
  );
};
