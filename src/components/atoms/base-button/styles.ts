import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${verticalScale(56)}px;
  padding: ${scale(8)}px;
  justify-content: center;
  align-items: center;
  background-color: #7f3dff;
  border-radius: 16px;
`;

export const ButtonText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(18)}px;
  font-weight: 600;
  line-height: ${verticalScale(20)}px;
  color: #fcfcfc;
  text-align: center;
`;