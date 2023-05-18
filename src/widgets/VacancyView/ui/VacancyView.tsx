import { FC, useEffect } from 'react';
import { Container, Loader, Stack } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { ResponseError, VacancyItem, VacancyViewDescription } from 'entities';
import { RESPONSE_STATUS, STATUS_MESSAGE, useLazyGetVacancyQuery } from 'shared';

export const VacancyView: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [getVacancy, { data: vacancy, isFetching, isError }] = useLazyGetVacancyQuery();

  useEffect(() => {
    if (id) {
      getVacancy({ id: id });
    }
  }, [id, getVacancy]);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <ResponseError codeStatus={RESPONSE_STATUS.serverError} message={STATUS_MESSAGE.serverError} />;
  }

  if (!vacancy) {
    return null;
  }

  return (
    <Container size="lg">
      <Stack>
        <VacancyItem vacancy={vacancy} />
        <VacancyViewDescription vacancy={vacancy} />
      </Stack>
    </Container>
  );
};
