import React from 'react';

import {StatusBar} from 'react-native';

import {SafeArea} from 'atoms';

import {Colors} from 'theme/colors';

import {AccountInfo, Header, Tabs} from './components';
import {HomeScreenProps} from './types';
import {Container} from './styles';

export const HomeScreen: React.FC<HomeScreenProps> = () => (
  <SafeArea backgroundColor={Colors.light[100]}>
    <StatusBar barStyle="dark-content" />
    <Header />
    <Container>
      <AccountInfo />
    </Container>
    <Tabs />
  </SafeArea>
);
