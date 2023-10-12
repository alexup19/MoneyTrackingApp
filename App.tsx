import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StackNavigator} from 'navigation/stack-navigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
