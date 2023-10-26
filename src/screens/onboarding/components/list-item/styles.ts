import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

import {Colors} from 'theme/colors';
import {Regular1, TitleX} from 'theme/text';
import {verticalScale, scale} from 'utils/scaling';

export const {width} = Dimensions.get('window');

export const Slide = styled.View`
  width: ${width}px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: ${verticalScale(312)}px;
  height: ${verticalScale(312)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${verticalScale(40)}px;
`;

export const TextContainer = styled.View`
  width: 100%;
  padding: 0px ${scale(50)}px;
  gap: ${verticalScale(16)}px;
`;

export const Title = styled(TitleX)`
  font-size: ${verticalScale(32)}px;
  line-height: ${verticalScale(40)}px;
  color: ${Colors.dark[50]};
  text-align: center;
`;

export const SubTitle = styled(Regular1)`
  text-align: center;
  color: ${Colors.dark[25]};
`;
