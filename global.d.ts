interface ImportMetaEnv {
  readonly VITE_PARALECT_API: string;
  readonly VITE_SECRET_API_KEY: string;
  readonly VITE_API_LOGIN: string;
  readonly VITE_API_PASSWORD: string;
  readonly VITE_API_CLIENT_ID: string;
  readonly VITE_API_CLIENT_SECRET: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
