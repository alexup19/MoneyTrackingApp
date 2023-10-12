import {ReactNode} from 'react';

import {ViewProps} from 'react-native';

export type SafeAreaProps = {
  children: ReactNode;
  backgroundColor?: string | undefined;
};

export type SafeAreViewProps = ViewProps & {
  backgroundColor?: string | undefined;
};
