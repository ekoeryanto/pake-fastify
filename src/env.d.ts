declare global {
  namespace NodeJS {
    interface ProcessEnv extends Record<string, string> {
      PORT: string;
      HOST: string;
      TRUST_PROXY: string;
      ABORT_UNHANDLED: boolean;
      NODE_ENV: 'development' | 'production' | 'staging' | 'testing';
    }
  }
}
