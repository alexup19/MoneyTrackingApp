import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransactionScreen} from 'screens';
import {RouteNames} from './route-names';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={RouteNames.transaction} component={TransactionScreen} />
  </Stack.Navigator>
);
