import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {verticalScale, scale} from 'utils/scaling';

export const RulerIcon = (props: SvgProps) => (
  <Svg
    width={scale(8)}
    height={verticalScale(14)}
    fill="none"
    viewBox="0 0 8 14"
    {...props}>
    <Path
      fill="#1D1D1D"
      d="M0 1.333c0-.266.1-.5.3-.7.2-.2.433-.3.7-.3h6c.256 0 .486.1.692.3.205.2.308.434.308.7v11.334c0 .266-.103.5-.308.7-.206.2-.436.3-.692.3H1a.96.96 0 0 1-.7-.3.96.96 0 0 1-.3-.7V1.333Zm1 0v11.334h6V10.5H4v-1h3v-2H4v-1h3v-2H4v-1h3V1.333H1ZM4 3.5v1-1Zm0 3v1-1Zm0 3v1-1Z"
    />
  </Svg>
);
