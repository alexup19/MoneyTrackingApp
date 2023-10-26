import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

import {BaseInputProps} from './types';

export const TextInput = styled.TextInput<BaseInputProps>`
  width: 100%;
  height: ${verticalScale(56)}px;
  border-width: 1px;
  border-radius: 16px;
  border-color: ${props => props.borderColor || Colors.light[20]};
  color: ${Colors.dark[100]};
  font-weight: 400;
  line-height: ${verticalScale(18)}px;
  font-size: ${verticalScale(16)}px;
  font-family: Inter;
  padding: 0px ${scale(16)}px;
`;
