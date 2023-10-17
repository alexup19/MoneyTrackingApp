import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {User} from 'utils/general-types';

interface UserState {
  user: User;
  pin: string;
  setUser: (newUser: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: {
        name: '',
        email: '',
        password: '',
        photo: '',
      },
      pin: '',
      setUser: (newUser: User) => set(() => ({user: newUser})),
      setPin: (newPin: string) => set(() => ({pin: newPin})),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
