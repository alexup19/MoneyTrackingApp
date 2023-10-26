import * as React from 'react';

import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const ProfileIcon = (props: SvgProps) => (
  <Svg
    width={scale(20)}
    height={verticalScale(24)}
    fill="none"
    viewBox="0 0 20 24"
    {...props}>
    <Path
      fill={props.color || '#C6C6C6'}
      d="M10 12.07a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM13 14H7a7 7 0 0 0-7 7 3 3 0 0 0 3 3h14a3 3 0 0 0 3-3 7 7 0 0 0-7-7Z"
    />
  </Svg>
);
