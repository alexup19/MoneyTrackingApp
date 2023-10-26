import styled from 'styled-components/native';

import {BaseImage} from 'atoms';

import {scale, verticalScale} from 'utils/scaling';

export const Container = styled.View`
  background-color: #ffffff;
  padding: ${verticalScale(16)}px ${scale(20)}px;
  border-radius: 24px;
  margin: 0px ${scale(16)}px;
`;

export const InfoContainer = styled.View`
  padding: ${verticalScale(30)}px ${scale(16)}px ${verticalScale(40)}px
    ${scale(34)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled(BaseImage)`
  width: ${verticalScale(80)}px;
  height: ${verticalScale(80)}px;
  border-radius: 100px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${scale(10)}px;
  align-items: center;
`;

export const MenuIcon = styled.View`
  width: ${verticalScale(52)}px;
  height: ${verticalScale(52)}px;
  background-color: #ffe2e4;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.TouchableOpacity`
  height: ${verticalScale(32)}px;
  width: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  gap: ${verticalScale(8)}px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${scale(20)}px;
`;
