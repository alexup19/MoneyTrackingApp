import {TextProps} from 'react-native';

import styled from 'styled-components/native';

import {verticalScale} from 'utils/scaling';

import {Colors} from './colors';

export interface ThemeTextProps extends TextProps {
  align?: string;
  color?: string;
  fontSize?: number;
  weight?: number;
  lineHeight?: number;
}

const BaseText = styled.Text<ThemeTextProps>`
  font-family: Inter;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || Colors.dark[75]};
  letter-spacing: 0px;
`;

export const TitleX = styled(BaseText)`
  font-size: ${props => verticalScale(props.fontSize || 64)}px;
  font-weight: ${props => props.weight || 700};
  line-height: ${props => verticalScale(props.lineHeight || 80)}px;
`;

export const Title1 = styled(TitleX)`
  font-size: ${verticalScale(32)}px;
  line-height: ${verticalScale(34)}px;
`;

export const Title2 = styled(Title1)`
  font-size: ${verticalScale(22)}px;
  line-height: ${verticalScale(24)}px;
`;

export const Title3 = styled(Title1)`
  font-size: ${verticalScale(18)}px;
  line-height: ${verticalScale(22)}px;
`;

export const Regular1 = styled(BaseText)`
  font-size: ${verticalScale(16)}px;
  font-weight: 500;
  line-height: ${verticalScale(19)}px;
`;

export const Regular2 = styled(Regular1)`
  font-weight: 600;
`;

export const Regular3 = styled(Regular1)`
  font-size: ${verticalScale(14)}px;
  line-height: ${verticalScale(18)}px;
`;

export const Small = styled(BaseText)`
  font-size: ${verticalScale(13)}px;
  font-weight: 500;
  line-height: ${verticalScale(16)}px;
`;

export const Tiny = styled(Small)`
  font-size: ${verticalScale(12)}px;
  line-height: ${verticalScale(12)}px;
`;
