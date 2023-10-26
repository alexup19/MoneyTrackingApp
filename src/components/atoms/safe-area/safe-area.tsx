import React from 'react';

import {SafeAreaView} from './styles';
import {SafeAreViewProps} from './types';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeArea: React.FC<SafeAreViewProps> = props => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      backgroundColor={props.backgroundColor}
      style={{
        paddingTop: insets.top,
      }}
      {...props}>
      {props.children}
    </SafeAreaView>
  );
};
