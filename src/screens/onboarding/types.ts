import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from 'navigation/stack-navigator';
import {RouteNames} from 'navigation/route-names';

export type OnboardingScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.onboarding
>;

export type SlideProps = {
  item: {title: string; subTitle: string; illustration: JSX.Element};
};
