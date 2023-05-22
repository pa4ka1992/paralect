import { FC } from 'react';
import { AppShell, Box, Flex, MediaQuery, Paper, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Searchbar } from 'features';
import { Filters, VacanciesOverview } from 'widgets';
import {
  RESPONSE_STATUS,
  STATUS_MESSAGE,
  useAppActions,
  useAppSelector,
  useSearchVacanciesQuery,
  ResponseError,
  getLazyComponent
} from 'shared';
import { SidebarButton } from 'entities';

const Sidebar = getLazyComponent('widgets', 'Sidebar');

export const Main: FC = () => {
  const [opened, handlers] = useDisclosure(false);

  const { requestParams } = useAppSelector((state) => state.filtersReducer);
  const { setPage } = useAppActions();

  const { data: searchResult, isFetching, isError } = useSearchVacanciesQuery(requestParams);

  if (isError) {
    return <ResponseError codeStatus={RESPONSE_STATUS.serverError} message={STATUS_MESSAGE.serverError} />;
  }

  return (
    <AppShell
      h="100%"
      padding="0 10px 0 10px"
      navbar={<Sidebar isFetching={isFetching} context={{ opened, handlers }} />}
      styles={{ main: { minHeight: 'auto' }, body: { height: '100%' } }}
    >
      <Flex align="flex-start" wrap="nowrap" gap="xl" h="100%">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Paper w="315px" sx={{ flex: '0 0 auto' }}>
            <Filters isFetching={isFetching} />
          </Paper>
        </MediaQuery>

        <Stack sx={{ flex: '1 1 auto' }} h="100%" pos="relative">
          <SidebarButton open={handlers.open} />

          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Box>
              <Searchbar isFetching={isFetching} />
            </Box>
          </MediaQuery>

          <VacanciesOverview
            vacancies={searchResult}
            isFetching={isFetching}
            page={requestParams.page}
            setPage={setPage}
          />
        </Stack>
      </Flex>
    </AppShell>
  );
};
