import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  TransactionScreen,
  PickerScreen,
  TransactionDetailScreen,
  OnboardingScreen,
  SignUpScreen,
  LoginScreen,
  EditProfileScreen,
} from 'screens';
import {RouteNames} from './route-names';
import {PickerItem, TransactionTypes} from 'utils/general-types';

import {BottomTabsNavigator} from './bottom-tabs-navigator';
import {useUserStore} from 'store/user-store';

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
  Profile: undefined;
  Tabs: undefined;
  EditProfile: undefined;
  Loading: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const StackNavigator = () => {
  const {user} = useUserStore();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user.email.length ? (
        <>
          <Stack.Screen
            name={RouteNames.tabs}
            component={BottomTabsNavigator}
          />
          <Stack.Screen
            name={RouteNames.editProfile}
            component={EditProfileScreen}
          />
          <Stack.Screen
            name={RouteNames.transaction}
            component={TransactionScreen}
          />
          <Stack.Screen
            name={RouteNames.transactionDetail}
            component={TransactionDetailScreen}
          />
          <Stack.Screen
            name={RouteNames.picker}
            component={PickerScreen}
            options={{presentation: 'modal'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={RouteNames.onboarding}
            component={OnboardingScreen}
          />
          <Stack.Screen name={RouteNames.signUp} component={SignUpScreen} />
          <Stack.Screen name={RouteNames.login} component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
