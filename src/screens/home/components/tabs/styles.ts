import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

import {TabProps} from './types';

export const TabButton = styled.View<TabProps>`
  width: ${scale(68)}px;
  height: ${verticalScale(34)}px;
  background-color: ${props =>
    props.focused ? Colors.yellow[20] : Colors.light[100]};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const tabBarStyles = StyleSheet.create({
  tab: {
    minHeight: verticalScale(34),
    height: verticalScale(34),
  },
  bar: {
    backgroundColor: Colors.light[100],
    marginVertical: verticalScale(8),
    marginHorizontal: scale(16),
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  indicator: {
    backgroundColor: 'transparent',
  },
});
