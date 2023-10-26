import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

import {RouteNames} from 'navigation/route-names';
import {AppStackParamList} from 'navigation/stack-navigator';

import {TransactionTypes} from 'utils/general-types';

export type TransactionDetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.transactionDetail
>;

export type SafeAreaProps = SafeAreaViewProps & {
  type?: TransactionTypes;
};
