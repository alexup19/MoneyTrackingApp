import React from 'react';

import {IncomeIcon, ExpenseIcon} from 'icons';

import {Colors} from 'theme/colors';
import {Regular3} from 'theme/text';
import {useTransactionStore} from 'store/transaction-store';

import {
  AccountInfoContainer,
  AmountText,
  SummaryContainer,
  IncomeSummary,
  IconContainer,
  TextContainer,
  SummaryText,
  ExpensesSummary,
} from './styles';

export const AccountInfo: React.FC = () => {
  const {totalAmount, totalExpenses, totalIncome} = useTransactionStore();

  return (
    <AccountInfoContainer>
      <Regular3 align="center" color={Colors.dark[25]}>
        Account Balance
      </Regular3>
      <AmountText>${totalAmount}</AmountText>
      <SummaryContainer>
        <IncomeSummary>
          <IconContainer>
            <IncomeIcon />
          </IconContainer>
          <TextContainer>
            <Regular3 color={Colors.light[80]}>Income</Regular3>
            <SummaryText>${totalIncome}</SummaryText>
          </TextContainer>
        </IncomeSummary>
        <ExpensesSummary>
          <IconContainer>
            <ExpenseIcon />
          </IconContainer>
          <TextContainer>
            <Regular3 color={Colors.light[80]}>Expenses</Regular3>
            <SummaryText>${totalExpenses}</SummaryText>
          </TextContainer>
        </ExpensesSummary>
      </SummaryContainer>
    </AccountInfoContainer>
  );
};
