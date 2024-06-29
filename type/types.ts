import { NextComponentType, NextPageContext } from 'next';

export type NextPageWithAuth<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  requireAuth?: boolean;
};
