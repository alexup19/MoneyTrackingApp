import {TouchableOpacityProps} from 'react-native';

export type BasePickerProps = TouchableOpacityProps & {
  placeholder?: string;
  borderColor?: string;
  value: string | null;
};
