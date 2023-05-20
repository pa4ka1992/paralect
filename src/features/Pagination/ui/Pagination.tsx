import { Dispatch, FC, SetStateAction, useEffect, useMemo } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Pagination as MantinePagination, Paper } from '@mantine/core';
import { TOTAL_PAGES, useMatchBreakPoints, VACANCIES_PER_PAGE } from 'shared';

type Props = {
  page: number;
  setPage: ActionCreatorWithPayload<number, 'filters/setPage'> | Dispatch<SetStateAction<number>>;
  total?: number;
};

export const Pagination: FC<Props> = ({ page, setPage, total }) => {
  const { isMatches } = useMatchBreakPoints('xs');

  const { totalPages } = useMemo(() => {
    const searchPages = total && Math.ceil(total / VACANCIES_PER_PAGE);
    const totalPages = searchPages && searchPages < TOTAL_PAGES ? searchPages : TOTAL_PAGES;

    return { totalPages };
  }, [total]);

  useEffect(() => {
    if (totalPages < page) {
      setPage(totalPages);
    }
  }, [totalPages, page, setPage]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <Paper withBorder={false} p="sm" bg="whites.2" pos="sticky" bottom="0" sx={{ alignSelf: 'center' }}>
      <MantinePagination
        value={page}
        onChange={handlePage}
        total={totalPages}
        siblings={1}
        radius="sm"
        withControls={isMatches}
        styles={(theme) => ({
          control: {
            fontSize: theme.fontSizes.sm
          }
        })}
        sx={{ justifyContent: 'center' }}
      />
    </Paper>
  );
};
