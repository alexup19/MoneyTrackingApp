import styled from 'styled-components/native';

import {BaseImage} from 'atoms';

import {Colors} from 'theme/colors';
import {verticalScale, scale} from 'utils/scaling';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${verticalScale(56)}px;
  padding: ${scale(8)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px dashed #91919f;
  gap: ${scale(10)}px;
`;

export const ImageContainer = styled.View`
  width: ${verticalScale(100)}px;
  height: ${verticalScale(100)}px;
`;

export const Image = styled(BaseImage)`
  border-radius: 16px;
  width: ${verticalScale(100)}px;
  height: ${verticalScale(100)}px;
`;

export const CloseButton = styled.TouchableOpacity`
  border-radius: 100px;
  position: absolute;
  width: ${verticalScale(30)}px;
  height: ${verticalScale(30)}px;
  background-color: ${Colors.light[60]};
  z-index: 9999;
  left: ${scale(66)}px;
  top: ${verticalScale(4)}px;
  justify-content: center;
  align-items: center;
`;
