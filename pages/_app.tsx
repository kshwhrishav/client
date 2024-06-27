import "@/styles/globals.css";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import Layout from "./index";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
