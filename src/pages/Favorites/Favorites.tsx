import { FC } from 'react';
import { VacanciesOverview } from 'widgets';

export const Favorites: FC = () => {
  return (
    <section>
      <VacanciesOverview perPage={4} />
    </section>
  );
};
