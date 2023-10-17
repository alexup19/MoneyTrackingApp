import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteNames} from 'navigation/route-names';
import {AppStackParamList} from 'navigation/stack-navigator';

export type ListItemProps = {
  title: string;
  id: string;
};

export type PickerScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.picker
>;
