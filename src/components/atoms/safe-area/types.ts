import {ReactNode} from 'react';

import {ViewProps} from 'react-native';

export type SafeAreViewProps = ViewProps & {
  backgroundColor?: string | undefined;
  children: ReactNode;
};
