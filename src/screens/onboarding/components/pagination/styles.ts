import {Animated, Dimensions} from 'react-native';

import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const {width} = Dimensions.get('window');

export const DOT_WIDTH = scale(20);

export const PaginationContainer = styled.View`
  width: 100%;
  margin-top: ${verticalScale(30)}px;
  margin-bottom: ${verticalScale(30)}px;
  align-items: center;
`;

export const Dot = styled(Animated.View)`
  border-width: 1px;
  border-color: #eee5ff;
  height: ${scale(12)}px;
  width: ${scale(12)}px;
  border-radius: 100px;
  margin: 0px ${scale(4)}px;
`;

export const ActiveDot = styled(Dot)`
  background-color: #7f3dff;
  position: absolute;
`;

export const DotContainer = styled.View`
  flex-direction: row;
`;
