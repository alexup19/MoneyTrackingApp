import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const TextInput = styled.TextInput`
  width: 100%;
  height: ${verticalScale(56)}px;
  border-width: 1px;
  border-radius: 16px;
  border-color: #f1f1fa;
  color: #0d0e0f;
  font-weight: 400;
  line-height: ${verticalScale(18)}px;
  font-size: ${verticalScale(16)}px;
  font-family: Inter;
  padding: 0px ${scale(16)}px;
`;
