import { Paper, Text } from '@mantine/core';
import { FC } from 'react';
import { IVacancy, useMatchBreakPoints } from 'shared';

type Props = {
  vacancy: IVacancy;
};

export const VacancyViewDescription: FC<Props> = ({ vacancy }) => {
  const { isMatches } = useMatchBreakPoints('xs');
  const formatted = vacancy.vacancyRichText.replace('<br />', '');

  return (
    <Paper p={isMatches ? 'md' : 'xs'}>
      <Text
        fz={isMatches ? 'sm' : 'xs'}
        dangerouslySetInnerHTML={{ __html: formatted }}
        sx={{
          li: {
            padding: '3px'
          },
          lineHeight: '25px'
        }}
      ></Text>
    </Paper>
  );
};
