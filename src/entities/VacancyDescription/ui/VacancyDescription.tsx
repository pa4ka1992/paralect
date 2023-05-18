import { Paper, Text } from '@mantine/core';
import { FC } from 'react';
import { IVacancy } from 'shared';

type Props = {
  vacancy: IVacancy;
};

export const VacancyViewDescription: FC<Props> = ({ vacancy }) => {
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
