import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  isAuthorizationResponse,
  Authorization,
  IVacancy,
  ICatalogue,
  isVacancies,
  isVacancy,
  isCatalogues,
  ISearch,
  RequestParams
} from 'shared';
import { getIdsParam, prepareHeaders, removeEmptyParams } from '../lib';
import { PUBLISHED, VACANCIES_PER_PAGE } from '../constants/superJob';

export const superJobAPI = createApi({
  reducerPath: 'superJobAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PARALECT_API,
    prepareHeaders: prepareHeaders
  }),
  endpoints: (builder) => ({
    getAuthorization: builder.query<Authorization | undefined, null>({
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

    searchVacancies: builder.query<ISearch | undefined, RequestParams>({
      query: ({ page, ...rest }) => ({
        url: '/2.0/vacancies',
        params: {
          published: PUBLISHED,
          count: VACANCIES_PER_PAGE,
          page: page - 1,
          ...removeEmptyParams(rest)
        }
      }),
      transformResponse: (response: unknown) => {
        return isVacancies(response) ? response : undefined;
      }
    }),

    getVacancy: builder.query<IVacancy | undefined, { id: string }>({
      query: ({ id }) => ({
        url: `/2.0/vacancies/${id}`
      }),
      transformResponse: (response: unknown) => {
        return isVacancy(response) ? response : undefined;
      }
    }),

    getCatalogues: builder.query<ICatalogue[] | undefined, null>({
      query: () => ({
        url: '/2.0/catalogues'
      }),
      transformResponse: (response: unknown) => {
        return isCatalogues(response) ? response : undefined;
      }
    }),

    getFavorites: builder.query<ISearch | undefined, { ids: number[]; page: number }>({
      query: ({ ids, page }) => ({
        url: `/2.0/vacancies?${getIdsParam(ids)}`,
        params: {
          count: VACANCIES_PER_PAGE,
          page: page - 1
        }
      }),
      transformResponse: (response: unknown) => {
        return isVacancies(response) ? response : undefined;
      }
    })
  })
});

export const {
  useLazyGetAuthorizationQuery,
  useGetCataloguesQuery,
  useLazyGetVacancyQuery,
  useSearchVacanciesQuery,
  useGetFavoritesQuery
} = superJobAPI;
