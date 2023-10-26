import styled from 'styled-components/native';

import {Colors} from 'theme/colors';

import {SafeAreViewProps} from './types';

export const SafeAreaView = styled.View<SafeAreViewProps>`
  flex: 1;
  background-color: ${props => props.backgroundColor || Colors.light[100]};
`;
