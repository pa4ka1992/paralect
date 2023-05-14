import { Box } from '@mantine/core';
import { FC } from 'react';
import { Pagination, VacancyList } from 'features';
import { useSearchVacanciesQuery } from 'shared';

export const VacancyBox: FC = () => {
  const { data } = useSearchVacanciesQuery({ keyword: '', payment_from: '', payment_to: '' });
  return (
    <Box>
      <VacancyList vacancies={data} />
      <Pagination />
    </Box>
  );
};
