import React from 'react';

import * as ImagePicker from 'expo-image-picker';

import {AttachmentIcon} from 'icons';

import {Colors} from 'theme/colors';
import {Regular1, Regular3} from 'theme/text';

import {Button, ImageContainer, CloseButton, Image} from './styles';
import {BaseButtonProps} from './types';

export const AttachmentButton = (props: BaseButtonProps) => {
  const {attachment, setAttachment} = props;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAttachment(result.assets[0].uri);
    }
  };

  if (attachment?.length) {
    return (
      <ImageContainer>
        <CloseButton onPress={() => setAttachment('')}>
          <Regular1>X</Regular1>
        </CloseButton>
        <Image source={attachment} />
      </ImageContainer>
    );
  }

  return (
    <Button onPress={pickImage} {...props}>
      <AttachmentIcon />
      <Regular3 color={Colors.dark[25]}>Add Photo</Regular3>
    </Button>
  );
};
