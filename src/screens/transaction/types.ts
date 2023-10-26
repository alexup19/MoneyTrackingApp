import {TextProps} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RouteNames} from 'navigation/route-names';
import {AppStackParamList} from 'navigation/stack-navigator';
import {TransactionCategory} from 'utils/general-types';

export type TransactionScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.transaction
>;

export type ColorItem = TextProps & {
  color: string;
};

export type FormValuesProps = {
  title: string;
  amount: string;
  category: TransactionCategory;
};
