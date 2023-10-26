import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppStackParamList} from 'navigation/stack-navigator';
import {Transaction} from 'utils/general-types';

export type TransactionCardProps = {
  transaction: Transaction;
};

export type CardIconProps = {
  color: string;
};

export type CardNavigationProps = NativeStackNavigationProp<AppStackParamList>;
