import { Container } from '@mantine/core';
import { FC } from 'react';
import { useMatchBreakPoints } from 'shared';
import { VacancyView } from 'widgets';

export const Vacancy: FC = () => {
  const { isMatches } = useMatchBreakPoints('md');

  return (
    <Container p={isMatches ? 'md' : 0} size="lg" pos="relative" h="100%">
      <VacancyView />
    </Container>
  );
};
