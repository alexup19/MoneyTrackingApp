import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  TransactionScreen,
  PickerScreen,
  HomeScreen,
  TransactionDetailScreen,
  OnboardingScreen,
  SignUpScreen,
  LoginScreen,
  PinScreen,
} from 'screens';
import {RouteNames} from './route-names';
import {PickerItem, TransactionTypes} from 'utils/general-types';

export type AppStackParamList = {
  Home: undefined;
  Transaction: {type: TransactionTypes; transactionId?: number};
  Picker: {
    title: string;
    selectedItem: PickerItem;
    setSelectedItem: (itemToSelect: PickerItem) => void;
    items: PickerItem[];
  };
  TransactionDetails: {
    transactionId: number;
  };
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
  Pin: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={RouteNames.pin} component={PinScreen} />
    <Stack.Screen name={RouteNames.onboarding} component={OnboardingScreen} />
    <Stack.Screen name={RouteNames.signUp} component={SignUpScreen} />
    <Stack.Screen name={RouteNames.login} component={LoginScreen} />
    <Stack.Screen name={RouteNames.home} component={HomeScreen} />
    <Stack.Screen name={RouteNames.transaction} component={TransactionScreen} />
    <Stack.Screen
      name={RouteNames.transactionDetail}
      component={TransactionDetailScreen}
    />
    <Stack.Screen
      name={RouteNames.picker}
      component={PickerScreen}
      options={{presentation: 'modal'}}
    />
  </Stack.Navigator>
);
