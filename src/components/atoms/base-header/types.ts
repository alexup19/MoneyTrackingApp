import {ViewProps, TextProps} from 'react-native';

export type BaseHeaderProps = ViewProps & {
  title: string;
  color?: string;
  canGoBack?: boolean;
  hasBorder?: boolean;
  rightButton?: JSX.Element;
};

export type HeaderTextProps = TextProps & {
  color?: string;
};
