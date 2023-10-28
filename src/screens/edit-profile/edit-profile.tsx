import React from 'react';

import {SafeArea, BaseHeader} from 'atoms';
import {UserForm} from 'organisms';

import {useUserStore} from 'store/user-store';
import {Colors} from 'theme/colors';
import {User} from 'utils/general-types';

import {Container} from './styles';
import {EditProfileScreenProps} from './types';

export const EditProfileScreen: React.FC<EditProfileScreenProps> = ({
  navigation,
}) => {
  const {setActiveUser} = useUserStore();

  const onSubmit = ({name, email, password, photo = ''}: User) => {
    setActiveUser({
      name,
      email,
      password,
      photo,
    });

    navigation.goBack();
  };

  return (
    <SafeArea>
      <BaseHeader title="Edit Profile" color={Colors.dark[50]} canGoBack />
      <Container>
        <UserForm buttonText="Edit" onSubmit={onSubmit} />
      </Container>
    </SafeArea>
  );
};
