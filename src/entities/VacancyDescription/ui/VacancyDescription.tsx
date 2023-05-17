import { Paper, Text } from '@mantine/core';
import { FC } from 'react';
import { VacancyProps } from 'shared';

export const VacancyViewDescription: FC<VacancyProps> = ({ vacancy }) => {
  return (
    <Paper>
      <Text
        dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
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
