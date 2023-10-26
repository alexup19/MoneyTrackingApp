import React from 'react';

import {SafeArea, BaseHeader} from 'atoms';
import {UserForm} from 'organisms';

import {User} from 'utils/general-types';
import {useUserStore} from 'store/user-store';
import {RouteNames} from 'navigation/route-names';

import {Container} from './styles';
import {SignUpScreenProps} from './types';

export const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {setUser} = useUserStore();

  const onSubmit = ({name, email, password, photo}: User) => {
    setUser({
      name,
      email,
      password,
      photo,
    });

    navigation.navigate(RouteNames.tabs);
  };

  return (
    <SafeArea>
      <BaseHeader title="Sign Up" color="#212325" canGoBack />
      <Container>
        <UserForm onSubmit={onSubmit} buttonText="Sign Up" />
      </Container>
    </SafeArea>
  );
};
