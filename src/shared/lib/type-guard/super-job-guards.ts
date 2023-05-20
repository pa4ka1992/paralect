import { IVacancy } from 'shared/model';
import { Authorization, ICatalogue, ISearch } from '../../model/types';
import { requiredAuthFields, requiredVacancyFields } from './constants';

export const isAuthorizationResponse = (response: unknown): response is Authorization => {
  if (response instanceof Object) {
    return requiredAuthFields.every((field) => {
      return field in response;
    });
  }

  return false;
};

export const isCatalogues = (response: unknown): response is ICatalogue[] => {
  if (response instanceof Array) {
    return response.every((catalogue) => catalogue instanceof Object && 'title' in catalogue && 'key' in catalogue);
  }

  return false;
};

export const isVacancy = (response: unknown): response is IVacancy => {
  if (response instanceof Object) {
    return requiredVacancyFields.every((field) => {
      return field in response;
    });
  }

  return false;
};

export const isVacancies = (response: unknown): response is ISearch => {
  if (response instanceof Object) {
    if ('objects' in response && 'total' in response) {
      if (response.objects instanceof Array) {
        return response.objects.every((vacancy) => isVacancy(vacancy));
      }
    }
  }

  return false;
};
