import { FC, useEffect } from 'react';
import { Flex, Loader, Stack } from '@mantine/core';
import { Searchbar } from 'features';
import { Filters, VacanciesOverview } from 'widgets';
import { useAppActions, useAppSelector, useSearchVacanciesQuery } from 'shared';
import { ResponseError } from 'entities';

export const Main: FC = () => {
  const { search, filters, skipQuery } = useAppSelector((state) => state.filtersReducer);
  const { category, paymentTo, paymentFrom } = filters;
  const { setSkipQuery } = useAppActions();

  useEffect(() => {
    setSkipQuery(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    data: vacancies,
    isFetching,
    isError
  } = useSearchVacanciesQuery(
    {
      keyword: search,
      payment_from: paymentFrom ? String(paymentFrom) : '',
      payment_to: paymentTo ? String(paymentTo) : '',
      catalogues: category
    },
    { skip: skipQuery }
  );

  if (isError) {
    return <ResponseError codeStatus="500" message="Я не знаю, что-то сломалось" />;
  }

  return (
    <Flex align="flex-start" wrap="nowrap" gap="xl" h="100%">
      <Filters />
      <Stack sx={{ flex: '1 1 auto' }} h="100%" pos="relative">
        <Searchbar />
        {isFetching ? <Loader /> : <VacanciesOverview vacancies={vacancies} isFetching={isFetching} />}
      </Stack>
    </Flex>
  );
};
