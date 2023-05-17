import { Container } from '@mantine/core';
import { FC } from 'react';
import { VacancyView } from 'widgets';

export const Vacancy: FC = () => {
  return (
    <Container size="lg">
      <VacancyView />
    </Container>
  );
};
