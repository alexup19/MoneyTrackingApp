import {TouchableOpacityProps} from 'react-native';

export type BaseButtonProps = TouchableOpacityProps & {
  title: string;
  textStyle?: object;
};
