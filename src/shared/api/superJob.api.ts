import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  isAuthorizationResponse,
  Authorization,
  IVacancy,
  ICatalogue,
  isVacancies,
  isVacancy,
  isCatalogues
} from 'shared';
import { prepareHeaders } from '../lib';

export const superJobAPI = createApi({
  reducerPath: 'superJobAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PARALECT_API,
    prepareHeaders: prepareHeaders
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<Authorization | undefined, {}>({
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
        return isAuthorizationResponse(response) ? response : undefined;
      }
    }),

    searchVacancies: builder.query<
      IVacancy[] | undefined,
      { keyword: string; payment_from: string; payment_to: string; catalogues: string }
    >({
      query: ({ keyword, payment_from, payment_to, catalogues }) => ({
        url: '/2.0/oauth2/vacancies/',
        params: {
          published: 1,
          keyword: keyword,
          payment_from: payment_from,
          payment_to: payment_to,
          catalogues: catalogues
        }
      }),
      transformResponse: (response: { objects: unknown }) => {
        return isVacancies(response.objects) ? response.objects : undefined;
      }
    }),

    getVacancy: builder.query<IVacancy | undefined, { id: string }>({
      query: ({ id }) => ({
        url: `/2.0/vacancies/${id}/`
      }),
      transformResponse: (response: unknown) => {
        return isVacancy(response) ? response : undefined;
      }
    }),

    getCatalogues: builder.query<ICatalogue[] | undefined, {}>({
      query: () => ({
        url: '/2.0/catalogues/'
      }),
      transformResponse: (response: unknown) => {
        return isCatalogues(response) ? response : undefined;
      }
    })
  })
});

export const { useGetAccessTokenQuery, useGetCataloguesQuery, useLazyGetVacancyQuery, useSearchVacanciesQuery } =
  superJobAPI;
