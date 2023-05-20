import { FC } from 'react';
import { RESPONSE_STATUS, STATUS_MESSAGE, ResponseError } from 'shared';

export const NotFound: FC = () => {
  return <ResponseError codeStatus={RESPONSE_STATUS.notFound} message={STATUS_MESSAGE.notFound} />;
};
