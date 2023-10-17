import styled from 'styled-components/native';

import {scale, verticalScale} from 'utils/scaling';

export const Form = styled.View`
  width: 100%;
  padding: 0px ${scale(16)}px;
  gap: ${verticalScale(24)}px;
  margin-top: ${verticalScale(56)}px;
`;

export const ErrorText = styled.Text`
  font-size: ${verticalScale(14)}px;
  color: #fd3c4a;
`;
