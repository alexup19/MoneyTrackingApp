import React from 'react';

import {Image} from 'expo-image';

import {BaseImageProps} from './types';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const BaseImage: React.FC<BaseImageProps> = props => (
  <Image
    placeholder={blurhash}
    contentFit="cover"
    transition={1000}
    {...props}
  />
);
