import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale} from 'utils/scaling';

import {ButtonProps} from './types';

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${verticalScale(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor || Colors.violet[100]};
  border-radius: 16px;
`;
