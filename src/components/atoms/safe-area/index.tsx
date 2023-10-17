import React from 'react';

import {SafeAreaView} from './styles';
import {SafeAreaProps} from './types';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeArea = ({children, backgroundColor, style}: SafeAreaProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      backgroundColor={backgroundColor}
      style={{
        paddingTop: insets.top,
        ...style,
      }}>
      {children}
    </SafeAreaView>
  );
};
