import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const InputContainer = styled.View`
  background-color: #fff;
  width: 100%;
  border-radius: 32px 32px 0px 0px;
  padding: ${verticalScale(24)}px ${scale(16)}px ${verticalScale(50)}px
    ${scale(16)}px;
  gap: ${verticalScale(16)}px;
  justify-content: flex-end;
`;

export const TitleText = styled.Text`
  color: rgba(252, 252, 252, 0.4);
  font-family: Inter;
  font-size: ${verticalScale(18)}px;
  font-weight: 600;
  line-height: ${verticalScale(22)}px;
  margin-bottom: ${verticalScale(14)}px;
`;

export const TransactionInput = styled.TextInput`
  font-family: Inter;
  color: #fcfcfc;
  font-size: ${verticalScale(64)}px;
  font-weight: 600;
  line-height: ${verticalScale(77)}px;
`;

export const MoneySign = styled.Text`
  font-family: Inter;
  color: #fcfcfc;
  font-size: ${verticalScale(64)}px;
  font-weight: 600;
  line-height: ${verticalScale(77)}px;
`;

export const MoneyContainer = styled.View`
  flex-direction: row;
`;

export const TextContainer = styled.View`
  width: 100%;
  padding: 0px ${scale(26)}px;
  margin-bottom: ${verticalScale(16)}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
