import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HomeIcon, ProfileIcon} from 'icons';

import {RouteNames} from 'navigation/route-names';
import {Colors} from 'theme/colors';
import {TitleX} from 'theme/text';

import {Bar, Container, Tab} from './styles';
import {IconProps} from './types';

const Icon = ({name, isFocused}: IconProps) => {
  switch (name) {
    case RouteNames.home:
      return (
        <HomeIcon color={isFocused ? Colors.violet[100] : Colors.dark[25]} />
      );
    case RouteNames.profile:
      return (
        <ProfileIcon color={isFocused ? Colors.violet[100] : Colors.dark[25]} />
      );
  }
};

export const TabBar = ({state, descriptors, navigation}: any) => {
  const insets = useSafeAreaInsets();

  return (
    <Container inset={insets.bottom}>
      <Bar>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Tab onPress={onPress} key={index}>
              <Icon name={route.name} isFocused={isFocused} />
              <TitleX
                align="center"
                color={isFocused ? Colors.violet[100] : Colors.dark[25]}
                fontSize={10}
                weight={500}
                lineHeight={12}>
                {label}
              </TitleX>
            </Tab>
          );
        })}
      </Bar>
    </Container>
  );
};
