import {Dimensions, Animated} from 'react-native';
import styled from 'styled-components/native';

import {BaseButton, SafeArea} from 'atoms';

import {verticalScale, scale} from 'utils/scaling';

export const {width} = Dimensions.get('window');

export const DOT_WIDTH = scale(20);

export const LoginButton = styled(BaseButton)`
  background-color: #eee5ff;
`;

export const SafeAreaView = styled(SafeArea)`
  justify-content: center;
`;

export const Slide = styled.View`
  width: ${width}px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: ${verticalScale(312)}px;
  height: ${verticalScale(312)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${verticalScale(40)}px;
`;

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
  margin-horizontal: ${scale(4)}px;
`;

export const ActiveDot = styled(Dot)`
  background-color: #7f3dff;
  position: absolute;
`;

export const DotContainer = styled.View`
  flex-direction: row;
`;

export const TextContainer = styled.View`
  width: 100%;
  padding: 0px ${scale(50)}px;
  gap: 16px;
`;

export const Title = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(32)}px;
  font-weight: 700;
  line-height: ${verticalScale(40)}px;
  color: #212325;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 500;
  line-height: ${verticalScale(20)}px;
  text-align: center;
  color: #91919f;
`;

export const ButtonContainer = styled.View`
  padding: 0px ${scale(20)}px;
  gap: ${verticalScale(16)}px;
`;
