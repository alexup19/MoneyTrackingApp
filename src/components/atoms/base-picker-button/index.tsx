import React from 'react';

import {ArrowDownIcon} from 'icons';

import {PickerButton, PickerButtonText} from './styles';
import {BasePickerProps} from './types';

export const BasePickerButton = (props: BasePickerProps) => (
  <PickerButton {...props}>
    <PickerButtonText active={props.value?.length}>
      {props.value || props.placeholder}
    </PickerButtonText>
    <ArrowDownIcon />
  </PickerButton>
);
