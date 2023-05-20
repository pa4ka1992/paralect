import { isAuthorizationResponse } from 'shared/lib/type-guard';
import { PrepareHeaders } from '../../model';
import { LOCAL_STORAGE_NAMES } from '../../constants';

export const prepareHeaders: PrepareHeaders = (headers, api) => {
  headers.set('x-secret-key', import.meta.env.VITE_SECRET_API_KEY);
  headers.set('X-Api-App-Id', import.meta.env.VITE_API_CLIENT_SECRET);

  if (api.endpoint !== 'getAuthorization') {
    const authString = localStorage.getItem(LOCAL_STORAGE_NAMES.auth);

    if (authString) {
      const authObj = JSON.parse(authString);

      if (isAuthorizationResponse(authObj)) {
        headers.set('authorization', `Bearer ${authObj.access_token}`);
      }
    }
  }
  return headers;
};
