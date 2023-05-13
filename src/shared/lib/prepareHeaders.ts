import { BaseQueryApi } from '@reduxjs/toolkit/dist/query';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

type PrepareHeaders =
  | ((
      headers: Headers,
      api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>
    ) => MaybePromise<void | Headers>)
  | undefined;

export const prepareHeaders: PrepareHeaders = (headers, api) => {
  headers.set('x-secret-key', import.meta.env.VITE_SECRET_API_KEY);
  headers.set('X-Api-App-Id', import.meta.env.VITE_API_CLIENT_SECRET);

  if (api.endpoint !== 'getAccessToken') {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
  }
  return headers;
};
