import { BaseQueryApi } from '@reduxjs/toolkit/dist/query';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

export type Authorization = {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
};

export type RequestParams = {
  keyword?: string;
  payment_from?: number | '';
  payment_to?: number | '';
  catalogues?: string;
  page: number;
};

export interface ISearch {
  objects: IVacancy[];
  total: number;
}

export interface IVacancy {
  id: number;
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
}

export interface ICatalogue {
  key: number;
  title: string;
}

export type PrepareHeaders =
  | ((
      headers: Headers,
      api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>
    ) => MaybePromise<void | Headers>)
  | undefined;
