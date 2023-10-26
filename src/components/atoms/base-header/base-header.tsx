import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {ArrowLeftIcon} from 'icons';

import {Colors} from 'theme/colors';
import {Title3} from 'theme/text';
import {verticalScale} from 'utils/scaling';

import {Container, HeaderButton} from './styles';
import {BaseHeaderProps} from './types';

export const BaseHeader: React.FC<BaseHeaderProps> = props => {
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
            width={verticalScale(24)}
            height={verticalScale(24)}
          />
        ) : (
          <></>
        )}
      </HeaderButton>
      <Title3 color={props.color || Colors.light[100]} align="center">
        {props.title}
      </Title3>
      {props.rightButton ? props.rightButton : <HeaderButton />}
    </Container>
  );
};
