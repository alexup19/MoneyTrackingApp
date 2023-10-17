import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {ArrowLeftIcon} from 'icons';
import {scale} from 'utils/scaling';

import {Container, TitleText, HeaderButton} from './styles';
import {BaseHeaderProps} from './types';

export const BaseHeader = (props: BaseHeaderProps) => {
  const navigation = useNavigation();
  return (
    <Container {...props}>
      <HeaderButton
        onPress={() => {
          navigation.goBack();
        }}>
        {props.canGoBack ? (
          <ArrowLeftIcon
            color={props.color}
            width={scale(24)}
            height={scale(24)}
          />
        ) : (
          <></>
        )}
      </HeaderButton>
      <TitleText color={props.color}>{props.title}</TitleText>
      {props.rightButton ? props.rightButton : <HeaderButton />}
    </Container>
  );
};
