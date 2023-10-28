import {Transaction} from 'utils/general-types';

export type RouteProps = {
  transactions: Transaction[];
  title: string | undefined;
};
