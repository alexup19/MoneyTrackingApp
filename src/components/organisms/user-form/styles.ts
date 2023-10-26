import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {verticalScale} from 'utils/scaling';

export const Form = styled.View`
  width: 100%;
  gap: ${verticalScale(24)}px;
  margin-bottom: ${verticalScale(40)}px;
`;

export const ErrorText = styled.Text`
  font-size: ${verticalScale(14)}px;
  color: ${Colors.red[100]};
`;
