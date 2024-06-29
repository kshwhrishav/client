import type { AppProps as NextAppProps } from "next/app";
import type { NextPage } from "next";

export type AppProps<P = any> = NextAppProps & {
  Component: NextPage & { requireAuth?: boolean };
};
