import React from 'react';

import {Colors} from 'theme/colors';

import {TextInput} from './styles';
import {BaseInputProps} from './types';

export const BaseTextInput: React.FC<BaseInputProps> = props => (
  <TextInput
    placeholderTextColor={Colors.dark[25]}
    borderColor={props.borderColor}
    {...props}
  />
);
