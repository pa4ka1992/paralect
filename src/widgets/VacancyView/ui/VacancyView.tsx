import { FC, useEffect } from 'react';
import { Container, Stack } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { VacancyItem, VacancyViewDescription } from 'entities';
import {
  RESPONSE_STATUS,
  STATUS_MESSAGE,
  useLazyGetVacancyQuery,
  useMatchBreakPoints,
  Loader,
  ResponseError
} from 'shared';

export const VacancyView: FC = () => {
  const { isMatches } = useMatchBreakPoints('md');

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
    <Container p={isMatches ? 'md' : 0} size="lg">
      <Stack>
        <VacancyItem vacancy={vacancy} />
        <VacancyViewDescription vacancy={vacancy} />
      </Stack>
    </Container>
  );
};
