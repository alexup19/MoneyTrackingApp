import styled from 'styled-components/native';
import {TransactionTypes} from 'utils/general-types';

import {verticalScale, scale} from 'utils/scaling';
import {SafeAreaProps} from './types';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  width: 100%;
  padding-bottom: ${verticalScale(48)}px;
  border-radius: 0px 0px 16px 16px;
  background-color: ${props =>
    props.type === TransactionTypes.income ? '#00A86B' : '#FD3C4A'};
`;

export const SafeAreaView = styled.SafeAreaView<SafeAreaProps>`
  background-color: ${props =>
    props.type === TransactionTypes.income ? '#00A86B' : '#FD3C4A'};
`;

export const AmountText = styled.Text`
  color: #fcfcfc;
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(48)}px;
  font-weight: 700;
  line-height: ${verticalScale(80)}px;
`;

export const TitleText = styled.Text`
  color: #fcfcfc;
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 500;
  line-height: ${verticalScale(20)}px;
`;

export const DateContainer = styled.View`
  margin-top: ${verticalScale(8)}px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: ${scale(12)}px;
`;

export const DateText = styled.Text`
  color: #fcfcfc;
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(13)}px;
  font-weight: 500;
  line-height: ${verticalScale(16)}px;
`;

export const InfoCard = styled.View`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #f1f1fa;
  top: ${verticalScale(230)}px;
  height: ${verticalScale(90)}px;
  width: ${scale(343)}px;
  flex-direction: row;
  align-self: center;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${scale(28)}px;
`;

export const InfoCardTitle = styled.Text`
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(14)}px;
  font-weight: 500;
  line-height: ${verticalScale(18)}px;
  color: #91919f;
`;

export const InfoCardDescription = styled.Text`
  text-align: center;
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 600;
  line-height: ${verticalScale(29)}px;
  color: #0d0e0f;
`;

export const InfoTextContainer = styled.View``;

export const InfoContainer = styled.View`
  padding: 0px ${scale(16)}px;
`;

export const Body = styled.View`
  margin-top: ${verticalScale(76)}px;
  margin-bottom: ${verticalScale(60)}px;
  width: 100%;
  gap: ${verticalScale(16)}px;
`;

export const DashSeparator = styled.View`
  border: 1px dashed #91919f;
  border-bottom: none;
`;

export const BodyText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(16)}px;
  font-weight: 500;
  line-height: ${verticalScale(20)}px;
  color: #0d0e0f;
  text-align: left;
`;

export const BodyTitleText = styled(BodyText)`
  font-weight: 600;
  color: #91919f;
`;

export const Attachment = styled.View`
  height: ${verticalScale(116)}px;
  width: 100%;
  border-radius: 8px;
  background-color: red;
`;

export const TrashButton = styled.TouchableOpacity`
  width: ${verticalScale(32)}px;
  height: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
`;
