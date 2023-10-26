import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

import {BasePickerProps, ButtonTextProps} from './types';

export const PickerButton = styled.TouchableOpacity<BasePickerProps>`
  width: 100%;
  height: ${verticalScale(56)}px;
  border-width: 1px;
  border-radius: 16px;
  border-color: ${props => props.borderColor || '#f1f1fa'};
  padding: ${verticalScale(8)}px ${scale(16)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const PickerButtonText = styled.Text<ButtonTextProps>`
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 400;
  line-height: ${verticalScale(18)}px;
  color: ${props => (props.active ? '#0d0e0f' : '#91919f')};
`;
