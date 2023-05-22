import { RequestParams } from '../../model/types';

type RestParams = Omit<RequestParams, 'page'>;

export const removeEmptyParams = (params: RestParams) => {
  const paramsKeys = Object.keys(params);

  return (paramsKeys as (keyof RestParams)[]).reduce(
    (acc, key) => {
      if (!params[key]) {
        delete acc[key];
      }

      return acc;
    },
    { ...params }
  );
};
