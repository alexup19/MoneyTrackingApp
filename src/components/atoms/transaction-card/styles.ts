import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

import {CardIconProps} from './types';
import { Colors } from 'theme/colors';

export const Card = styled.TouchableOpacity`
  width: 100%;
  padding: ${scale(16)}px ${verticalScale(16)}px;
  flex-direction: row;
  gap: ${scale(10)}px;
  background-color: ${Colors.light[80]};
  border-radius: 24px;
`;

export const CardIcon = styled.View<CardIconProps>`
  width: ${verticalScale(60)}px;
  height: ${verticalScale(60)}px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${props => props.color};
`;

export const CardTitle = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 500;
  line-height: ${verticalScale(20)}px;
  color: #292b2d;
`;

export const CardSubTitle = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(13)}px;
  font-weight: 500;
  line-height: ${verticalScale(16)}px;
  color: #91919f;
`;

export const TextContainer = styled.View`
  justify-content: space-between;
  flex: 1;
  padding-vertical: ${verticalScale(6)}px;
`;

export const SubtitleTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AmountText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 600;
  line-height: ${verticalScale(20)}px;
  color: ${props => (props.expense ? '#FD3C4A' : '#00A86B')};
`;

export const OtherText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(30)}px;
  text-align: center;
  font-weight: 600;
  color: purple;
`;
