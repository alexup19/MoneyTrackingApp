import React from 'react';

import {Alert} from 'react-native';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useUserStore} from 'store/user-store';
import {RouteNames} from 'navigation/route-names';

import {SafeArea, BaseHeader, BaseTextInput, BaseButton} from 'atoms';

import {Form, ErrorText, Container} from './styles';
import {LoginScreenProps} from './types';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {user} = useUserStore();

  const onSubmit = ({email, password}: {email: string; password: string}) => {
    if (email === user.email && password === user.password) {
      navigation.navigate(RouteNames.home);
    } else {
      Alert.alert('Wrong credentials!');
    }
  };

  return (
    <SafeArea>
      <BaseHeader title="Login" color="#212325" canGoBack />
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
