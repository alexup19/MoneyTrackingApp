import {ViewProps} from 'react-native';

export type BaseHeaderProps = ViewProps & {
  title: string;
  canGoBack?: boolean;
};
