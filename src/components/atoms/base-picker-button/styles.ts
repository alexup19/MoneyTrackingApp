import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

import {BasePickerProps} from './types';

export const PickerButton = styled.TouchableOpacity<BasePickerProps>`
  width: 100%;
  height: ${verticalScale(56)}px;
  border-width: 1px;
  border-radius: 16px;
  border-color: ${props => props.borderColor || Colors.light[20]};
  padding: ${verticalScale(8)}px ${scale(16)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
