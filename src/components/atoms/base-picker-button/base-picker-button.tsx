import React from 'react';

import {ArrowDownIcon} from 'icons';

import {Colors} from 'theme/colors';
import {Regular1} from 'theme/text';

import {PickerButton} from './styles';
import {BasePickerProps} from './types';

export const BasePickerButton: React.FC<BasePickerProps> = props => (
  <PickerButton borderColor={props.borderColor} {...props}>
    <Regular1
      weight={400}
      color={props.value?.length ? Colors.dark[100] : Colors.dark[25]}>
      {props.value || props.placeholder}
    </Regular1>
    <ArrowDownIcon />
  </PickerButton>
);
