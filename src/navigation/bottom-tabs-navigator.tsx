import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, ProfileScreen} from 'screens';

import {RouteNames} from './route-names';
import {TabBar} from 'atoms';

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppStackParamList>();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={RouteNames.home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={RouteNames.profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
