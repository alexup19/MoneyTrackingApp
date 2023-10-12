import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      stroke="#fff"
      d="m5.375 15.5.863-.855 5.41-5.36L5.375 15.5Zm0 0H6.59m-1.215 0H6.59m0 0H27a.5.5 0 0 1 0 1H5.383l.853.854 5.36 5.36.002.001a.5.5 0 0 1 0 .71.5.5 0 0 1-.355.145.5.5 0 0 1-.35-.144v-.001l-5.66-5.658a2.5 2.5 0 0 1 0-3.533l5.709-5.659a.5.5 0 0 1 .706 0M6.59 15.5l5.058-6.925m0 0a.5.5 0 0 1 0 .71v-.71Z"
    />
  </Svg>
);
