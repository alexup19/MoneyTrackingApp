import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

import {verticalScale, scale} from 'utils/scaling';

import {ColorItem} from './types';

export const InputContainer = styled.ScrollView`
  background-color: #fff;
  width: 100%;
  border-radius: 32px 32px 0px 0px;
  padding: ${verticalScale(24)}px ${scale(16)}px 0px ${scale(16)}px;
`;

export const TitleText = styled.Text<ColorItem>`
  color: ${props => props.color || 'rgba(252, 252, 252, 0.4)'};
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

export const MoneySign = styled.Text<ColorItem>`
  font-family: Inter;
  align-self: center;
  color: ${props => props.color || '#fcfcfc'};
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

export const formStyles = StyleSheet.create({
  inputContainer: {
    gap: verticalScale(16),
  },
});
