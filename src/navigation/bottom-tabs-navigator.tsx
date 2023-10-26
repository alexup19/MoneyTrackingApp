import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import {TabBar} from 'atoms';
import {HomeScreen, ProfileScreen} from 'screens';

import {RouteNames} from './route-names';

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppStackParamList>();

const _tabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator tabBar={_tabBar}>
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
