import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const ExpenseIcon = (props: SvgProps) => (
  <Svg
    width={scale(25)}
    height={verticalScale(28)}
    fill="none"
    viewBox="0 0 25 28"
    {...props}>
    <Path
      fill="#FD3C4A"
      d="M19.198 12h-14a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5Zm-7 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
    <Path
      fill="#FD3C4A"
      d="M12.197 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12.908.29a1 1 0 0 0-1.42 0l-4.24 4.25A1.015 1.015 0 0 0 8.658 6l2.54-2.59V9a1 1 0 0 0 2 0V3.41L15.738 6a1 1 0 0 0 .7.29 1 1 0 0 0 .76-.29 1 1 0 0 0 0-1.41l-4.29-4.3Z"
    />
  </Svg>
);
