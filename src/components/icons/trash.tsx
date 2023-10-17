import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const TrashIcon = (props: SvgProps) => (
  <Svg
    width={scale(24)}
    height={verticalScale(26)}
    fill="none"
    viewBox="0 0 24 26"
    {...props}>
    <Path
      fill="#fff"
      d="M23 4h-7V3a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H1a1 1 0 0 0 0 2h1.09l1.55 15.5a5 5 0 0 0 5 4.5h6.76a5 5 0 0 0 5-4.5L21.91 6H23a1 1 0 1 0 0-2ZM10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V3Zm.09 16H10a1 1 0 0 1-1-.91l-.52-6a1 1 0 1 1 1.99-.18l.53 6a1 1 0 0 1-.91 1.09Zm4.91-.91a1 1 0 0 1-1 .91h-.09a1 1 0 0 1-.91-1.09l.53-6a1.003 1.003 0 1 1 2 .17L15 18.09Z"
    />
  </Svg>
);
