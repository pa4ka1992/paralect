import { FC } from 'react';
import { ResponseError } from 'entities';

export const NotFound: FC = () => {
  return <ResponseError codeStatus="404" message="Страница не найдена" />;
};
