import React from 'react';

import {ArrowLeftIcon} from 'icons';
import {scale} from 'utils/scaling';

import {Container, TitleText, HeaderButton} from './styles';
import {BaseHeaderProps} from './types';

export const BaseHeader = (props: BaseHeaderProps) => (
  <Container {...props}>
    <HeaderButton>
      {props.canGoBack ? (
        <ArrowLeftIcon width={scale(24)} height={scale(24)} />
      ) : (
        <></>
      )}
    </HeaderButton>
    <TitleText>{props.title}</TitleText>
    <HeaderButton />
  </Container>
);
