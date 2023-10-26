import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

import {CardIconProps} from './types';

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

export const TextContainer = styled.View`
  justify-content: space-between;
  flex: 1;
  padding: ${verticalScale(6)}px 0px;
`;

export const SubtitleTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
