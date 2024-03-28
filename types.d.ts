declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string | undefined;
      CLERK_SECRET_KEY: string | undefined;
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: string | undefined;
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: string | undefined;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string | undefined;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string | undefined;
      NODE_ENV: string | undefined;
      PORT: string | undefined;
      MONGO_URI: string | undefined;
      JWT_SECRET_KEY: string | undefined;
    }
  }
}

export {};
