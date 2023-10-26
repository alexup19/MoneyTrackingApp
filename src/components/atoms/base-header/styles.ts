import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

import {BaseHeaderProps} from './types';

export const Container = styled.View<BaseHeaderProps>`
  width: 100%;
  height: ${verticalScale(64)}px;
  padding: 0px ${scale(16)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-width: ${props => (props.hasBorder ? '1px' : '0px')};
  border-bottom-color: ${Colors.dark[50]}40;
`;

export const HeaderButton = styled.TouchableOpacity`
  height: ${verticalScale(32)}px;
  width: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
`;
