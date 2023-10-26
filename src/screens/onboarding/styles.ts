import {Dimensions, StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {BaseButton, SafeArea} from 'atoms';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

export const {width} = Dimensions.get('window');

export const LoginButton = styled(BaseButton)`
  background-color: ${Colors.violet[20]};
`;

export const SafeAreaView = styled(SafeArea)`
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  padding: 0px ${scale(20)}px;
  gap: ${verticalScale(16)}px;
`;

export const buttonStyles = StyleSheet.create({
  secondaryButton: {color: Colors.violet[100]},
});
