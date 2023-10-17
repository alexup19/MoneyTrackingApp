import styled from 'styled-components/native';

import {verticalScale} from 'utils/scaling';

export const ListItem = styled.TouchableOpacity`
  width: 100%;
  height: ${verticalScale(52)}px;
  padding: 0px ${verticalScale(16)}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ListText = styled.Text`
  font-family: Inter;
  font-size: ${verticalScale(14)}px;
  font-weight: 500;
  line-height: ${verticalScale(18)}px;
  color: #0d0e0f;
`;
