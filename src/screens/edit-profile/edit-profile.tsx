import React from 'react';

import {SafeArea, BaseHeader} from 'atoms';
import {UserForm} from 'organisms';

import {useUserStore} from 'store/user-store';

import {Container} from './styles';
import {EditProfileScreenProps} from './types';

export const EditProfileScreen: React.FC<EditProfileScreenProps> = ({
  navigation,
}) => {
  const {setUser} = useUserStore();

  const onSubmit = ({
    name,
    email,
    password,
    photo = '',
  }: {
    name: string;
    email: string;
    password: string;
    photo?: string;
  }) => {
    setUser({
      name,
      email,
      password,
      photo,
    });

    navigation.goBack();
  };

  return (
    <SafeArea>
      <BaseHeader title="Edit Profile" color="#212325" canGoBack />
      <Container>
        <UserForm buttonText="Edit" onSubmit={onSubmit} />
      </Container>
    </SafeArea>
  );
};
