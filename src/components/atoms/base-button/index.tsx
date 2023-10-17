import React from 'react';

import {Button, ButtonText} from './styles';
import {BaseButtonProps} from './types';

export const BaseButton = (props: BaseButtonProps) => (
  <Button {...props}>
    <ButtonText style={props.textStyle}>{props.title}</ButtonText>
  </Button>
);
