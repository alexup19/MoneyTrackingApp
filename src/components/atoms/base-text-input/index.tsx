import React from 'react';

import {TextInput} from './styles';
import {BaseInputProps} from './types';

export const BaseTextInput = (props: BaseInputProps) => (
  <TextInput
    placeholderTextColor="#91919f"
    borderColor={props.borderColor}
    {...props}
  />
);
