import React from 'react';

import {SafeArea} from 'atoms';
import {LogOutIcon, PencilIcon} from 'icons';

import {RouteNames} from 'navigation/route-names';
import {Colors} from 'theme/colors';
import {Regular1, Regular3, Title2} from 'theme/text';
import {useUserStore} from 'store/user-store';

import {
  InfoContainer,
  Info,
  TextContainer,
  EditButton,
  Container,
  MenuItem,
  MenuIcon,
  Image,
} from './styles';
import {ProfileScreenProps} from './types';

export const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const {user, logOut} = useUserStore();

  const handleLogOut = () => {
    logOut();
    navigation.navigate(RouteNames.onboarding);
  };

  const goToEditScreen = () => navigation.navigate(RouteNames.editProfile);

  return (
    <SafeArea backgroundColor={Colors.light[100]}>
      <InfoContainer>
        <Info>
          <Image source={user.photo} />
          <TextContainer>
            <Regular3 color={Colors.dark[25]}>Username</Regular3>
            <Title2>{user.name}</Title2>
          </TextContainer>
        </Info>
        <EditButton onPress={goToEditScreen}>
          <PencilIcon />
        </EditButton>
      </InfoContainer>
      <Container>
        <MenuItem onPress={handleLogOut}>
          <MenuIcon>
            <LogOutIcon />
          </MenuIcon>
          <Regular1 color={Colors.dark[75]}>Logout</Regular1>
        </MenuItem>
      </Container>
    </SafeArea>
  );
};
