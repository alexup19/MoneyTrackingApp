import React from 'react';

import {Title3} from 'theme/text';

import {Button} from './styles';
import {BaseButtonProps} from './types';
import {Colors} from 'theme/colors';

export const BaseButton: React.FC<BaseButtonProps> = props => (
  <Button {...props}>
    <Title3 align="center" color={Colors.light[100]} style={props.textStyle}>
      {props.title}
    </Title3>
  </Button>
);
