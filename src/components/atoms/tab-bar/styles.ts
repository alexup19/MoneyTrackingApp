import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale} from 'utils/scaling';

import {ContainerProps} from './types';

export const Container = styled.View<ContainerProps>`
  padding-bottom: ${props => props.inset || 0}px;
  background-color: ${Colors.light[80]};
`;

export const Bar = styled.View`
  flex-direction: row;
  height: ${verticalScale(70)}px;
  background-color: ${Colors.light[80]};
`;

export const Tab = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${verticalScale(8)}px;
`;
