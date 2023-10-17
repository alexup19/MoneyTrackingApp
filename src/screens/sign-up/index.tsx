import React from 'react';

import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useUserStore} from 'store/user-store';
import {RouteNames} from 'navigation/route-names';

import {SafeArea, BaseHeader, BaseTextInput, BaseButton} from 'atoms';

import {ErrorText, Form} from './styles';
import {SignUpScreenProps} from './types';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
  passwordConfirmation: yup
    .string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const {setUser} = useUserStore();

  const onSubmit = ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    setUser({
      name,
      email,
      password,
      photo: '',
    });

    navigation.navigate(RouteNames.home);
  };

  return (
    <SafeArea>
      <BaseHeader title="Sign Up" color="#212325" canGoBack />
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
              placeholder="Name"
            />
          )}
          name="name"
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <BaseTextInput
              value={value}
              onChangeText={onChange}
              placeholder="Confirm Password"
              secureTextEntry
            />
          )}
          name="passwordConfirmation"
        />
        {errors.passwordConfirmation && (
          <ErrorText>{errors.passwordConfirmation.message}</ErrorText>
        )}
        <BaseButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
      </Form>
    </SafeArea>
  );
};
