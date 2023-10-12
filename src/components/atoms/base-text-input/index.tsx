import React from 'react';

import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

export const BaseTextInput = (props: TextInputProps) => (
  <TextInput placeholderTextColor="#91919f" {...props} />
);
