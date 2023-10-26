import React from 'react';

import {FlatList, StatusBar} from 'react-native';

import {BaseHeader, SafeArea} from 'atoms';
import {SuccessIcon} from 'icons';

import {ListItem, ListText} from './styles';
import {ListItemProps, PickerScreenProps} from './types';

export const PickerScreen: React.FC<PickerScreenProps> = ({
  navigation,
  route,
}) => {
  const {title, selectedItem, setSelectedItem, items} = route.params;

  const onItemPress = (item: ListItemProps) => {
    setSelectedItem(item);
    navigation.goBack();
  };

  const _renderItem = ({item}: {item: ListItemProps}) => (
    <ListItem onPress={() => onItemPress(item)}>
      <ListText>{item.title}</ListText>
      {item.id === selectedItem?.id ? <SuccessIcon /> : <></>}
    </ListItem>
  );

  return (
    <SafeArea>
      <StatusBar barStyle="dark-content" />
      <BaseHeader title={title} color="#212325" hasBorder canGoBack />
      <FlatList
        data={items}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
    </SafeArea>
  );
};
