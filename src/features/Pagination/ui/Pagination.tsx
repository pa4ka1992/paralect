import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { Box, Pagination as MantinePagination } from '@mantine/core';
import { TOTAL_PAGES, VACANCIES_PER_PAGE } from 'shared';

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
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
