import {Animated} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from 'navigation/stack-navigator';
import {RouteNames} from 'navigation/route-names';

export interface IDot {
  data: any[];
  scrollX: Animated.Value;
}

export type SlideProps = {
  title: string;
  subTitle: string;
  illustration: JSX.Element;
};

export type OnboardingScreenProps = NativeStackScreenProps<
  AppStackParamList,
  RouteNames.onboarding
>;
