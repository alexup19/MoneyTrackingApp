import React, {useState} from 'react';

import {SafeArea} from 'atoms';

import {StatusBar, FlatList} from 'react-native';

import styled from 'styled-components/native';
import {scale, verticalScale} from 'utils/scaling';

export const Key = styled.TouchableOpacity`
  width: 125px;
  height: 90px;
  justify-content: center;
  align-items: center;
`;

export const KeyText = styled.Text`
  font-family: Inter;
  font-size: 48px;
  font-weight: 500;
  line-height: 58px;
  text-align: center;
  color: #fcfcfc;
`;

export const Dot = styled.View`
  width: 32px;
  height: 32px;
  border: 4px #eee5ff;
  border-radius: 100px;
`;

export const ActiveDot = styled(Dot)`
  background-color: #fcfcfc;
  border: none;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 16px;
`;

export const PinScreen = () => {
  const [pin, setPin] = useState([]);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <SafeArea backgroundColor="#7F3DFF">
      <StatusBar animated={true} barStyle="light-content" />
      <DotContainer>
        <ActiveDot />
        <Dot />
        <Dot />
        <Dot />
      </DotContainer>
      <FlatList
        numColumns={3}
        data={items}
        renderItem={({item}) => (
          <Key title={item.title}>
            <KeyText>{item}</KeyText>
          </Key>
        )}
        keyExtractor={item => String(item)}
      />
    </SafeArea>
  );
};
