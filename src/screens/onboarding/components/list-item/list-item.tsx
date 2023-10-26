import React from 'react';

import {ImageContainer, Slide, SubTitle, TextContainer, Title} from './styles';
import {SlideProps} from './types';

export const ListItem: React.FC<SlideProps> = ({item}) => (
  <Slide>
    <ImageContainer>{item.illustration}</ImageContainer>
    <TextContainer>
      <Title>{item.title}</Title>
      <SubTitle>{item.subTitle}</SubTitle>
    </TextContainer>
  </Slide>
);
