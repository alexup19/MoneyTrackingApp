import * as React from 'react';

import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale} from 'utils/scaling';

export const HomeIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(24)}
    height={verticalScale(24)}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={props.color || '#7F3DFF'}
      d="m23.67 9.56-2-1.82L14 .78a3 3 0 0 0-4 0l-7.65 7-2 1.82A1 1 0 0 0 1 11.3a1 1 0 0 0 .67-.3l.33-.3V21a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V10.74l.33.3a1 1 0 0 0 .67.26 1 1 0 0 0 .67-1.74Z"
    />
  </Svg>
);
