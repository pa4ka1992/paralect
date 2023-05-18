import { FC, useMemo } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Box, Pagination as MantinePagination } from '@mantine/core';
import { TOTAL_PAGES, VACANCIES_PER_PAGE } from 'shared';

type Props = {
  page: number;
  setPage: ActionCreatorWithPayload<number, 'filters/setPage'>;
  searchTotal?: number;
};

export const Pagination: FC<Props> = ({ page, setPage, searchTotal }) => {
  const { totalPages } = useMemo(() => {
    const searchPages = searchTotal && Math.ceil(searchTotal / VACANCIES_PER_PAGE);
    const totalPages = searchPages && searchPages < TOTAL_PAGES ? searchPages : TOTAL_PAGES;

    return { totalPages };
  }, [searchTotal]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <Box sx={{ alignSelf: 'center' }}>
      <MantinePagination
        value={page}
        onChange={handlePage}
        total={totalPages}
        siblings={1}
        radius="sm"
        size="md"
        styles={(theme) => ({
          control: {
            fontSize: theme.fontSizes.sm
          }
        })}
      />
    </Box>
  );
};
