import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const IncomeIcon = (props: SvgProps) => (
  <Svg
    width={scale(24)}
    height={verticalScale(28)}
    fill="none"
    viewBox="0 0 24 28"
    {...props}>
    <Path
      fill="#00A86B"
      d="M19 12H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5Zm-7 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
    <Path
      fill="#00A86B"
      d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 0a1 1 0 0 0-1 1v5.59L8.46 4.05a1 1 0 0 0-1.41 1.41l4.24 4.25a1 1 0 0 0 .32.21 1 1 0 0 0 .78 0 1 1 0 0 0 .32-.21L17 5.46a1 1 0 0 0-1.41-1.41L13 6.59V1a1 1 0 0 0-1-1Z"
    />
  </Svg>
);
