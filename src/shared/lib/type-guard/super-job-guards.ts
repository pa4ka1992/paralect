import { IVacancy } from 'shared/model';
import { Authorization, ICatalogue } from '../../model/types';

const requiredVacancyFields = [
  'profession ',
  'firm_name',
  'town',
  'type_of_work',
  'payment_to',
  'payment_from',
  ' currency '
];

export const isAuthorizationResponse = (response: unknown): response is Authorization => {
  return response instanceof Object && 'access_token' in response;
};

export const isCatalogues = (response: unknown): response is ICatalogue[] => {
  if (response instanceof Array) {
    return response.every((catalogue) => catalogue instanceof Object && 'title' in catalogue);
  }

  return false;
};

export const isVacancy = (response: unknown): response is IVacancy => {
  if (response instanceof Object) {
    return requiredVacancyFields.every((field) => field in response);
  }

  return false;
};

export const isVacancies = (response: unknown): response is IVacancy[] => {
  if (response instanceof Array) {
    return response.every((vacancy) => isVacancy(vacancy));
  }

  return false;
};
