import styled from 'styled-components/native';

import {SafeAreViewProps} from './types';

export const SafeAreaView = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#FFF'};
`;
