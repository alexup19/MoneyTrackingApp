import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {scale, verticalScale} from 'utils/scaling';

export const Container = styled.View`
  margin-top: ${verticalScale(56)}px;
  width: 100%;
  padding: 0px ${scale(16)}px;
`;

export const Form = styled.View`
  width: 100%;
  gap: ${verticalScale(24)}px;
  margin-bottom: ${verticalScale(40)}px;
`;

export const ErrorText = styled.Text`
  font-size: ${verticalScale(14)}px;
  color: ${Colors.red[100]};
`;
