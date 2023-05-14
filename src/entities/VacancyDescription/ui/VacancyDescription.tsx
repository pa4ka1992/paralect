import { Paper } from '@mantine/core';
import { FC } from 'react';
import { VacancyProps } from 'shared';

export const VacancyViewDescription: FC<VacancyProps> = ({ vacancy }) => {
  return <Paper dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}></Paper>;
};
