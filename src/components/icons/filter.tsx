import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const FilterIcon = (props: SvgProps) => (
  <Svg
    width={scale(12)}
    height={verticalScale(8)}
    fill="none"
    viewBox="0 0 12 8"
    {...props}>
    <Path
      fill="#DC0A2D"
      d="M3.5 8h-3a.486.486 0 0 1-.5-.5.486.486 0 0 1 .5-.5h3a.486.486 0 0 1 .5.5.486.486 0 0 1-.5.5Zm8-7H.5A.486.486 0 0 1 0 .5.486.486 0 0 1 .5 0h11a.486.486 0 0 1 .5.5.485.485 0 0 1-.5.5Zm-4 3.5h-7A.486.486 0 0 1 0 4a.486.486 0 0 1 .5-.5h7A.486.486 0 0 1 8 4a.486.486 0 0 1-.5.5Z"
    />
  </Svg>
);
