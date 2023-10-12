import styled from 'styled-components/native';

export const InputContainer = styled.View`
  background-color: #fff;
  width: 100%;
  border-radius: 32px 32px 0px 0px;
  padding: 24px 16px 50px 16px;
  gap: 16px;
  justify-content: flex-end;
`;

export const TitleText = styled.Text`
  color: rgba(252, 252, 252, 0.4);
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 14px;
`;

export const TransactionInput = styled.TextInput`
  font-family: Inter;
  color: #fcfcfc;
  font-size: 64px;
  font-weight: 600;
  line-height: 77px;
`;

export const MoneySign = styled.Text`
  font-family: Inter;
  color: #fcfcfc;
  font-size: 64px;
  font-weight: 600;
  line-height: 77px;
`;

export const MoneyContainer = styled.View`
  flex-direction: row;
`;

export const TextContainer = styled.View`
  width: 100%;
  padding: 0px 26px;
  margin-bottom: 16px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
