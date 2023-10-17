import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteNames} from 'navigation/route-names';
import {AppStackParamList} from 'navigation/stack-navigator';

export type LoginScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.login
>;
