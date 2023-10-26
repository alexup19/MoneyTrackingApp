import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';

import {verticalScale} from 'utils/scaling';

export const LeftArrow = (props: SvgProps) => (
  <Svg
    width={verticalScale(30)}
    height={verticalScale(30)}
    fill="none"
    viewBox="0 0 30 30"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M13.9 23.967 4.633 14.7a1.016 1.016 0 0 1-.233-.333.978.978 0 0 1-.067-.367c0-.133.022-.256.067-.367.044-.11.122-.222.233-.333l9.3-9.3a.904.904 0 0 1 .667-.267c.267 0 .5.1.7.3.2.2.3.434.3.7 0 .267-.1.5-.3.7L7.733 13h16.534c.288 0 .527.094.716.283a.972.972 0 0 1 .284.717.972.972 0 0 1-.284.717.971.971 0 0 1-.716.283H7.733l7.6 7.6c.178.178.267.4.267.667 0 .266-.1.5-.3.7-.2.2-.433.3-.7.3a.96.96 0 0 1-.7-.3Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
