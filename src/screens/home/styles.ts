import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const Container = styled.View`
  padding-horizontal: ${scale(20)}px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: purple;
`;

export const ItemSeparator = styled.View`
  height: ${verticalScale(8)}px;
  width: 100%;
`;
