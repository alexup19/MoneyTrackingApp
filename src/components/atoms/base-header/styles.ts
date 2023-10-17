import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';
import {HeaderTextProps} from './types';

export const Container = styled.View`
  width: 100%;
  height: ${verticalScale(64)}px;
  padding: ${scale(16)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-width: ${props => (props.hasBorder ? '1px' : '0px')};
  border-bottom-color: rgba(0, 0, 0, 0.04);
`;

export const TitleText = styled.Text<HeaderTextProps>`
  font-family: Inter;
  font-size: ${verticalScale(18)}px;
  font-weight: 600;
  line-height: ${verticalScale(20)}px;
  color: ${props => props.color || '#fcfcfc'};
  text-align: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  height: ${scale(32)}px;
  width: ${scale(32)}px;
  justify-content: center;
  align-items: center;
`;
