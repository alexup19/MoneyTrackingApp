import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {Title2, TitleX} from 'theme/text';
import {verticalScale, scale} from 'utils/scaling';

export const AccountInfoContainer = styled.View``;

export const AmountText = styled(TitleX)`
  text-align: center;
  font-size: ${verticalScale(40)}px;
  font-weight: 600;
  line-height: ${verticalScale(48)}px;
  color: ${Colors.dark[75]};
  margin-top: ${verticalScale(9)}px;
`;

export const SummaryContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${scale(16)}px;
  margin-top: ${verticalScale(27)}px;
`;

export const IncomeSummary = styled.View`
  flex: 1;
  padding: ${verticalScale(16)}px 0px;
  border-radius: 28px;
  background-color: ${Colors.green[100]};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${scale(10)}px;
`;

export const ExpensesSummary = styled(IncomeSummary)`
  background-color: ${Colors.red[100]};
`;

export const SummaryText = styled(Title2)`
  line-height: ${verticalScale(27)}px;
  color: ${Colors.light[100]};
`;

export const TextContainer = styled.View``;

export const IconContainer = styled.View`
  width: ${verticalScale(48)}px;
  height: ${verticalScale(48)}px;
  background-color: ${Colors.light[100]};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
