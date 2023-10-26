import React from 'react';

import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {BaseTextInput, BaseButton} from 'atoms';
import {AttachmentButton} from 'molecules';

import {ErrorText, Form} from './styles';
import {UserFormProps} from './types';
import {useUserStore} from 'store/user-store';

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
  photo: yup.string().optional(),
});

export const UserForm: React.FC<UserFormProps> = ({onSubmit, buttonText}) => {
  const {user} = useUserStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
      photo: user.photo,
    },
  });

  return (
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
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <AttachmentButton attachment={value} setAttachment={onChange} />
        )}
        name="photo"
      />
      <BaseButton title={buttonText} onPress={handleSubmit(onSubmit)} />
    </Form>
  );
};
