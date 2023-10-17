import React from 'react';

import {Animated} from 'react-native';

import {
  PaginationContainer,
  DotContainer,
  ActiveDot,
  Dot,
  width,
  DOT_WIDTH,
} from '../styles';

import {IDot} from '../types';

export const Pagination = ({data, scrollX}: IDot) => (
  <PaginationContainer>
    <DotContainer>
      <ActiveDot
        style={{
          transform: [
            {
              translateX: Animated.divide(scrollX, width).interpolate({
                inputRange: [0, 1],
                outputRange: [0, DOT_WIDTH],
              }),
            },
          ],
        }}
      />
      {data.map((item, index) => (
        <Dot key={`CA-${index}-${item}`} />
      ))}
    </DotContainer>
  </PaginationContainer>
);
