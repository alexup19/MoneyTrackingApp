import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {User} from 'utils/general-types';

interface UserState {
  user: User;
  users: User[];
  addUser: (newUser: User) => void;
  getUser: (userEmail: string) => User | undefined;
  setActiveUser: (newUser: User) => void;
  logOut: () => void;
}

const addUser = (state: UserState, newUser: User) => ({
  users: [...state.users, newUser],
});

const getUser = (users: User[], userEmail: string) =>
  users.find((user: User) => user.email === userEmail);

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: {
        name: '',
        email: '',
        password: '',
        photo: '',
      },
      users: [],
      addUser: (newUser: User) =>
        set((state: UserState) => addUser(state, newUser)),
      getUser: (userEmail: string) => getUser(get().users, userEmail),
      setActiveUser: (newUser: User) => set(() => ({user: newUser})),
      logOut: () =>
        set(() => ({
          user: {
            name: '',
            email: '',
            password: '',
            photo: '',
          },
        })),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
