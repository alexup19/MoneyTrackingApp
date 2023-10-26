import styled from 'styled-components/native';

import {BaseImage} from 'atoms';

import {Colors} from 'theme/colors';
import {TransactionTypes} from 'utils/general-types';
import {verticalScale, scale} from 'utils/scaling';

import {SafeAreaProps, HeaderProps, InfoCardProps} from './types';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.light[100]};
`;

export const Header = styled.View<HeaderProps>`
  width: 100%;
  padding-bottom: ${verticalScale(48)}px;
  border-radius: 0px 0px 16px 16px;
  background-color: ${props =>
    props.type === TransactionTypes.income
      ? Colors.green[100]
      : Colors.red[100]};
`;

export const SafeAreaView = styled.SafeAreaView<SafeAreaProps>`
  background-color: ${props =>
    props.type === TransactionTypes.income
      ? Colors.green[100]
      : Colors.red[100]};
`;

export const DateContainer = styled.View`
  margin-top: ${verticalScale(8)}px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: ${scale(12)}px;
`;

export const InfoCard = styled.View<InfoCardProps>`
  background-color: ${Colors.light[100]};
  border-radius: 12px;
  border: 1px solid ${Colors.light[20]};
  top: ${props => props.topInset + verticalScale(208)}px;
  height: ${verticalScale(70)}px;
  width: ${scale(343)}px;
  flex-direction: row;
  align-self: center;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${scale(28)}px;
`;

export const InfoTextContainer = styled.View`
  gap: ${verticalScale(9)}px;
`;

export const InfoContainer = styled.View`
  padding: 0px ${scale(16)}px;
`;

export const Body = styled.View`
  margin-top: ${verticalScale(57)}px;
  margin-bottom: ${verticalScale(60)}px;
  width: 100%;
  gap: ${verticalScale(16)}px;
`;

export const DashSeparator = styled.View`
  border: 1px dashed ${Colors.light[20]};
`;

export const Attachment = styled(BaseImage)`
  height: ${verticalScale(116)}px;
  width: 100%;
  border-radius: 8px;
`;

export const AttachmentButton = styled.TouchableOpacity``;

export const TrashButton = styled.TouchableOpacity`
  width: ${verticalScale(32)}px;
  height: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
`;
