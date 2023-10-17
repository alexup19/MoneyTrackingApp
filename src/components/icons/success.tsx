import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SuccessIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#5233FF"
      d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.66 9.59L12 15.24a3 3 0 0 1-4.24 0l-1.42-1.41a1.003 1.003 0 1 1 1.42-1.42l1.41 1.42a1 1 0 0 0 1.42 0l5.65-5.66a1.003 1.003 0 1 1 1.42 1.42Z"
    />
  </Svg>
);
