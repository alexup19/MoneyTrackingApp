import React from 'react';

import {Button, ButtonText} from './styles';
import {BaseButtonProps} from './types';
import {AttachmentIcon} from 'icons';

export const AttachmentButton = (props: BaseButtonProps) => (
  <Button {...props}>
    <AttachmentIcon />
    <ButtonText>Add Attachment</ButtonText>
  </Button>
);
