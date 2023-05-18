import { FC } from 'react';
import { ResponseError } from 'entities';
import { RESPONSE_STATUS, STATUS_MESSAGE } from 'shared';

export const NotFound: FC = () => {
  return <ResponseError codeStatus={RESPONSE_STATUS.notFound} message={STATUS_MESSAGE.notFound} />;
};
