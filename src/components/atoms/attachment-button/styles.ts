import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${verticalScale(56)}px;
  padding: ${scale(8)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px dashed #91919f;
`;

export const ButtonText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 400;
  line-height: ${verticalScale(18)}px;
  color: #91919f;
  text-align: center;
  margin-left: ${scale(16)}px;
`;
