import React from 'react';

import {SafeArea, BaseHeader} from 'atoms';
import {UserForm} from 'organisms';

import {Colors} from 'theme/colors';
import {User} from 'utils/general-types';
import {useUserStore} from 'store/user-store';
import {RouteNames} from 'navigation/route-names';

import {Container} from './styles';
import {SignUpScreenProps} from './types';

export const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {setActiveUser, addUser} = useUserStore();

  const onSubmit = ({name, email, password, photo}: User) => {
    const newUser = {
      name,
      email,
      password,
      photo,
    };

    addUser(newUser);
    setActiveUser(newUser);

    navigation.navigate(RouteNames.tabs);
  };

  return (
    <SafeArea>
      <BaseHeader title="Sign Up" color={Colors.dark[50]} canGoBack />
      <Container>
        <UserForm onSubmit={onSubmit} buttonText="Sign Up" />
      </Container>
    </SafeArea>
  );
};
