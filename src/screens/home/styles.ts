import styled from 'styled-components/native';

import {verticalScale, scale} from 'utils/scaling';

export const Container = styled.View`
  padding: 0px ${scale(20)}px;
  margin-bottom: ${verticalScale(24)}px;
`;

export const ItemSeparator = styled.View`
  height: ${verticalScale(8)}px;
`;

export const ListHeader = styled.View`
  height: ${verticalScale(56)}px;
  justify-content: center;
`;
