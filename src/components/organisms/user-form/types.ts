import {User} from 'utils/general-types';

export type UserFormProps = {
  onSubmit: (user: User) => void;
  buttonText: string;
};
