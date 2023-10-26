import {TouchableOpacityProps, TextProps} from 'react-native';

export type BasePickerProps = TouchableOpacityProps & {
  placeholder?: string;
  borderColor?: string;
  value: string | null;
};

export type ButtonTextProps = TextProps & {
  active: boolean;
};
