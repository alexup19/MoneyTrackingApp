import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

import {BaseButton, BaseImage} from 'atoms';
import {StyleSheet} from 'react-native';
import {Colors} from 'theme/colors';

export const Container = styled.View`
  width: 100%;
  height: ${verticalScale(64)}px;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${scale(16)}px;
  flex-direction: row;
`;

export const Image = styled(BaseImage)`
  width: ${verticalScale(32)}px;
  height: ${verticalScale(32)}px;
  border-radius: 100px;
`;

export const AddButton = styled.TouchableOpacity`
  width: ${verticalScale(32)}px;
  height: ${verticalScale(32)}px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${Colors.violet[100]};
`;

export const SheetContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: ${scale(16)}px;
  padding: 32px;
`;

export const SheetButton = styled(BaseButton)`
  flex: 1;
`;

export const sheetStyles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: Colors.light[100],
    borderRadius: 32,
  },
});
