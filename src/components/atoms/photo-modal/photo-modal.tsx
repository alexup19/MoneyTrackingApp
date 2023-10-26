import React from 'react';
import {Modal} from 'react-native';

import {Background, Photo, CenteredView, GestureContainer} from './styles';
import {PhotoModalProps} from './types';

export const PhotoModal = ({
  visible,
  photo,
  onBackgroundPress,
}: PhotoModalProps) => {
  return (
    <GestureContainer
      onSwipeUp={onBackgroundPress}
      onSwipeDown={onBackgroundPress}>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        statusBarTranslucent={true}>
        <CenteredView>
          <Background />
          <Photo source={{uri: photo}} />
        </CenteredView>
      </Modal>
    </GestureContainer>
  );
};
