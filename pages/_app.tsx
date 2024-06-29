// MyApp.tsx
import "@/styles/globals.css";
import "../styles/global.scss";
import type { AppProps } from 'next/app';
import Layout from "./index";
import { AuthProvider } from "../context/AuthContext";
import { NextPageWithAuth } from '../type/types';

type AppPropsWithAuth = AppProps & {
  Component: NextPageWithAuth;
};

function MyApp({ Component, pageProps }: AppPropsWithAuth) {
  const requireAuth = Component.requireAuth ?? false;
  console.log('requireAuth in MyApp:', requireAuth); // Ensure this logs the expected value

  return (
    <AuthProvider>
      {requireAuth !== undefined && console.log('requireAuth in AuthProvider:', requireAuth)}
      {requireAuth ? (
        <Component {...pageProps} />
      ) : (
        <Layout requireAuth={requireAuth}>
          <Component {...pageProps} />
        </Layout>
      )}
    </AuthProvider>
  );
}

export default MyApp;
