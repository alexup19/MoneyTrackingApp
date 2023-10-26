import React from 'react';

import {Image, ImageProps, ImageSource} from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const BaseImage = (props: ImageProps & ImageSource) => (
  <Image
    placeholder={blurhash}
    contentFit="cover"
    transition={1000}
    {...props}
  />
);
