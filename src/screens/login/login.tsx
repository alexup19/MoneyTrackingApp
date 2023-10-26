import React from 'react';

import {Alert} from 'react-native';

import {Controller} from 'react-hook-form';

import {SafeArea, BaseHeader, BaseTextInput, BaseButton} from 'atoms';

import {RouteNames} from 'navigation/route-names';
import {Colors} from 'theme/colors';

import {useLogin} from './hooks';
import {Form, ErrorText, Container} from './styles';
import {LoginScreenProps} from './types';

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {user, errors, control, handleSubmit} = useLogin();

  const onSubmit = ({email, password}: {email: string; password: string}) => {
    if (email === user.email && password === user.password) {
      navigation.navigate(RouteNames.home);
    } else {
      Alert.alert('Wrong credentials!');
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
