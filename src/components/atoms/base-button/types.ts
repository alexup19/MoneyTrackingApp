import {TouchableOpacityProps} from 'react-native';

export type BaseButtonProps = TouchableOpacityProps & {
  title: string;
  textStyle?: object;
  backgroundColor?: string;
};

export type ButtonProps = {
  backgroundColor?: string;
};
