import { Stack } from '@mantine/core';
import { FC } from 'react';
import { uid } from 'uid';
import { IVacancy } from 'shared';
import { VacancyItem } from 'entities';

type Props = {
  vacancies?: IVacancy[];
};

export const VacancyList: FC<Props> = ({ vacancies }) => {
  return (
    <Stack sx={{ flex: '1 1 100%' }}>
      {vacancies?.map((vacancy) => (
        <VacancyItem key={uid()} vacancy={vacancy} />
      ))}
    </Stack>
  );
};
