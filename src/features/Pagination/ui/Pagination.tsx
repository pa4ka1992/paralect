import { Box, Pagination as MantinePagination } from '@mantine/core';
import { Dispatch, FC, SetStateAction, useMemo } from 'react';

type Props = {
  controls: {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    perPage: number;
    length?: number;
  };
};

export const Pagination: FC<Props> = ({ controls }) => {
  const { page, perPage, setPage, length } = controls;

  const pageCount = useMemo(() => length && Math.ceil(length / perPage), [length, perPage]);

  return (
    <Box sx={{ alignSelf: 'center' }}>
      {pageCount && (
        <MantinePagination
          value={page}
          onChange={(page) => setPage(page)}
          total={pageCount}
          siblings={2}
          radius="sm"
          size="md"
          styles={(theme) => ({
            control: {
              fontSize: theme.fontSizes.sm
            }
          })}
        />
      )}
    </Box>
  );
};
