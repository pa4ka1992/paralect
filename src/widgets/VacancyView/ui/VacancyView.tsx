import { FC, useEffect } from 'react';
import { Container, Stack } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { VacancyItem, VacancyViewDescription } from 'entities';
import { useLazyGetVacancyQuery } from 'shared';

export const VacancyView: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [getVacancy, { data: vacancy }] = useLazyGetVacancyQuery();

  useEffect(() => {
    if (id) {
      getVacancy({ id: id });
    }
  }, [id, getVacancy]);

  return (
    <>
      {vacancy && (
        <Container size="lg">
          <Stack>
            <VacancyItem vacancy={vacancy} />
            <VacancyViewDescription vacancy={vacancy} />
          </Stack>
        </Container>
      )}
    </>
  );
};
