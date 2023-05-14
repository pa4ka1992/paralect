import { FC, useEffect } from 'react';
import { Stack } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { VacancyItem, VacancyViewDescription } from 'entities';
import { useLazyGetVacancyQuery } from 'shared';

export const VacancyView: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [getVacancy, { data }] = useLazyGetVacancyQuery();

  useEffect(() => {
    if (id) {
      getVacancy({ id: id });
    }
  }, [id, getVacancy]);

  if (!data) {
    return null;
  }

  return (
    <Stack>
      <VacancyItem vacancy={data} />
      <VacancyViewDescription vacancy={data} />
    </Stack>
  );
};
