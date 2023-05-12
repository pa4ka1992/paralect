import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isAuthorizationResponse } from 'shared';
import { prepareHeaders } from '../lib';

export const superJobAPI = createApi({
  reducerPath: 'superJobAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PARALECT_API,
    prepareHeaders: prepareHeaders
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<unknown, {}>({
      query: () => ({
        url: '/2.0/oauth2/password',
        params: {
          login: import.meta.env.VITE_API_LOGIN,
          password: import.meta.env.VITE_API_PASSWORD,
          client_id: import.meta.env.VITE_API_CLIENT_ID,
          client_secret: import.meta.env.VITE_API_CLIENT_SECRET,
          hr: 0
        }
      }),
      transformResponse: (response: unknown) => {
        if (isAuthorizationResponse(response)) {
          return response;
        }

        // console.log('Authorization error');
      }
    })
  })
});

export const { useGetAccessTokenQuery } = superJobAPI;
