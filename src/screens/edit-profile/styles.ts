import styled from 'styled-components/native';

import {scale, verticalScale} from 'utils/scaling';

export const Container = styled.View`
  flex: 1;
  padding: 0px ${scale(16)}px;
  margin-top: ${verticalScale(56)}px;
`;
