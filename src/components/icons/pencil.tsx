import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale} from 'utils/scaling';

export const PencilIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(23)}
    height={verticalScale(23)}
    fill="none"
    viewBox="0 0 23 23"
    {...props}>
    <Path
      stroke="#212325"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.19 8.46-12 12a2.06 2.06 0 0 1-1 .54l-3.54.71a2 2 0 0 1-2.35-2.35l.7-3.51a2.06 2.06 0 0 1 .54-1L14.38 3a4.15 4.15 0 0 1 5.94 0 4 4 0 0 1-.13 5.51v-.05Z"
    />
  </Svg>
);
