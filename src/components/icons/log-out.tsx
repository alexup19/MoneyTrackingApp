import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale} from 'utils/scaling';

export const LogOutIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(24)}
    height={verticalScale(24)}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#FD3C4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 4V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M7 12h15.83M19.59 7.76l2.82 2.83a2 2 0 0 1 0 2.82l-2.82 2.83"
    />
  </Svg>
);
