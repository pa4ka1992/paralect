import { Authorization } from '../../model/types';

export const isAuthorizationResponse = (response: unknown): response is Authorization => {
  return response instanceof Object && 'access_token' in response;
};
