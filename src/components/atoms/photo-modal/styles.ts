import {Dimensions} from 'react-native';

import {BlurView} from '@react-native-community/blur';
import GestureRecognizer from 'react-native-swipe-gestures';
import styled from 'styled-components/native';

import {BaseImage} from 'atoms';

import {verticalScale} from 'utils/scaling';

const {width} = Dimensions.get('window');

export const Background = styled(BlurView)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled(BaseImage)`
  width: ${width}px;
  height: ${verticalScale(375)}px;
`;

export const GestureContainer = styled(GestureRecognizer)`
  flex: 1;
`;
