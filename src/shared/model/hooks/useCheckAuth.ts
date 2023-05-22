import { useEffect } from 'react';
import { isAuthorizationResponse, LOCAL_STORAGE_NAMES, useLazyGetAuthorizationQuery } from 'shared';

export const useCheckAuth = () => {
  const [getAuth, { data, isLoading, isSuccess, isError }] = useLazyGetAuthorizationQuery();

  useEffect(() => {
    const authString = localStorage.getItem(LOCAL_STORAGE_NAMES.auth);

    if (authString) {
      const authObj = JSON.parse(authString);

      if (isAuthorizationResponse(authObj)) {
        if (authObj.ttl < Date.now() / 1000) {
          getAuth(null);
        }
      }

      return;
    }

    getAuth(null);
  }, [getAuth]);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem(LOCAL_STORAGE_NAMES.auth, JSON.stringify(data));
    }
  }, [isSuccess, data]);

  return { isError, isLoading };
};
