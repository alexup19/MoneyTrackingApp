import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {scale, verticalScale} from 'utils/scaling';

export const ItemSeparator = styled.View`
  height: ${verticalScale(8)}px;
`;

export const ListHeader = styled.View`
  height: ${verticalScale(56)}px;
  justify-content: center;
`;

export const listStyles = StyleSheet.create({
  container: {paddingHorizontal: scale(20), paddingBottom: verticalScale(90)},
});

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
