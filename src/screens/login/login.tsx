import React from 'react';

import {Alert} from 'react-native';

import {Controller} from 'react-hook-form';

import {SafeArea, BaseHeader, BaseTextInput, BaseButton} from 'atoms';

import {Colors} from 'theme/colors';
import {RouteNames} from 'navigation/route-names';

import {useLogin} from './hooks';
import {Form, ErrorText, Container} from './styles';
import {LoginScreenProps} from './types';

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {getUser, setActiveUser, errors, control, handleSubmit} = useLogin();

  const onSubmit = ({email, password}: {email: string; password: string}) => {
    const user = getUser(email);

    if (user) {
      if (email === user?.email && password === user?.password) {
        setActiveUser(user);
        navigation.navigate(RouteNames.tabs);
      } else {
        Alert.alert('Wrong credentials!');
      }
    } else {
      Alert.alert('User does not exist');
    }
  };

  return (
    <SafeArea>
      <BaseHeader title="Login" color={Colors.dark[50]} canGoBack />
      <Container>
        <Form>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <BaseTextInput
                value={value}
                onChangeText={onChange}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
            name="email"
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <BaseTextInput
                value={value}
                onChangeText={onChange}
                placeholder="Password"
                secureTextEntry
              />
            )}
            name="password"
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </Form>
        <BaseButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
      </Container>
    </SafeArea>
  );
};
