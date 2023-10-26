import {TouchableOpacityProps} from 'react-native';

export type BaseButtonProps = TouchableOpacityProps & {
  attachment: string | undefined;
  setAttachment: (attachmentDir: string) => void | undefined;
};
