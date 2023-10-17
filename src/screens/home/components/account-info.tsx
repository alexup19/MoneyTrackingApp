import React from 'react';

import styled from 'styled-components/native';

import {useTransactionStore} from 'store/transaction-store';
import {verticalScale, scale} from 'utils/scaling';
import {IncomeIcon, ExpenseIcon} from 'icons';

export const AccountInfoContainer = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(14)}px;
  font-weight: 500;
  line-height: ${verticalScale(18)}px;
  color: #91919f;
`;

export const AmountText = styled.Text`
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(40)}px;
  font-weight: 600;
  line-height: ${verticalScale(48)}px;
  color: #161719;
  margin-top: ${verticalScale(9)}px;
`;

export const SummaryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${verticalScale(27)}px;
`;

export const IncomeSummary = styled.View`
  width: ${scale(164)}px;
  height: ${verticalScale(80)}px;
  border-radius: 28px;
  background-color: #00a86b;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${scale(10)}px;
`;

export const ExpensesSummary = styled(IncomeSummary)`
  background-color: #fd3c4a;
`;

export const SummaryText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(22)}px;
  font-weight: 600;
  line-height: ${verticalScale(27)}px;
  color: #fcfcfc;
`;

export const SummaryTitle = styled(SummaryText)`
  font-weight: 500;
  font-size: ${verticalScale(14)}px;
  line-height: ${verticalScale(17)}px;
`;

export const TextContainer = styled.View``;

export const IconContainer = styled.View`
  width: ${verticalScale(48)}px;
  height: ${verticalScale(48)}px;
  background-color: #fcfcfc;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const AccountInfo: React.FC = () => {
  const {totalAmount, totalExpenses, totalIncome} = useTransactionStore();

  return (
    <AccountInfoContainer>
      <Title>Account Balance</Title>
      <AmountText>${totalAmount}</AmountText>
      <SummaryContainer>
        <IncomeSummary>
          <IconContainer>
            <IncomeIcon />
          </IconContainer>
          <TextContainer>
            <SummaryTitle>Income</SummaryTitle>
            <SummaryText>${totalIncome}</SummaryText>
          </TextContainer>
        </IncomeSummary>
        <ExpensesSummary>
          <IconContainer>
            <ExpenseIcon />
          </IconContainer>
          <TextContainer>
            <SummaryTitle>Expenses</SummaryTitle>
            <SummaryText>${totalExpenses}</SummaryText>
          </TextContainer>
        </ExpensesSummary>
      </SummaryContainer>
    </AccountInfoContainer>
  );
};
