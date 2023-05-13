import { FC } from 'react';
import { Searchbar } from 'features';
import { Filters, VacancyBox } from 'widgets';

export const Main: FC = () => {
  return (
    <section>
      <Filters />
      <Searchbar />
      <VacancyBox />
    </section>
  );
};
