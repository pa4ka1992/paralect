export const prepareHeaders = (headers: Headers) => {
  headers.set('x-secret-key', import.meta.env.VITE_SECRET_API_KEY);

  return headers;
};
