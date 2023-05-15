import { useMemo } from 'react';
import { IVacancy } from 'shared/model/types';

export const usePaginationSlicer = (perPage: number, page: number, vacancies?: IVacancy[]) => {
  const vacanciesOnPage = useMemo(() => {
    const endOffset = (page - 1) * perPage + perPage;
    const startOffset = page === 1 ? 0 : (page - 1) * perPage;

    return vacancies?.slice(startOffset, endOffset);
  }, [perPage, vacancies, page]);

  return { vacanciesOnPage };
};
