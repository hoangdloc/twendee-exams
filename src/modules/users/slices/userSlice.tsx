import { createSlice } from '@reduxjs/toolkit';

import { User, UserApi } from '../@types/user';
import { IUserState } from '../@types/userState';
import { getListUsersAction } from '../actions/userAction';

const initialState: IUserState = {
  users: [] as User[],
  loading: true
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sortByFullName: (state) => {
      state.users = state.users.sort((a, b) => {
        const nameA = a.fullname.split(' ')[2].toLowerCase();
        const nameB = b.fullname.split(' ')[2].toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    },
    sortByUsername: (state) => {
      state.users = state.users.sort((a, b) => {
        const nameA = a.username.toLowerCase();
        const nameB = b.username.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListUsersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListUsersAction.fulfilled, (state, action) => {
        const usersFromApi = action.payload;

        const convertUsersApiToUsers = (usersApi: UserApi[]): User[] => {
          const users = usersApi.map((userApi) => {
            const title = userApi.name.title;
            const first = userApi.name.first;
            const last = userApi.name.last;
            const fullname = [title, first, last].join(' ');
            const user: User = {
              fullname,
              username: userApi.login.username,
              thumbnail: userApi.picture.large
            };

            return user;
          });

          return users;
        };

        const newUsers = convertUsersApiToUsers(usersFromApi);

        state.users = newUsers;
        state.loading = false;
      })
      .addCase(getListUsersAction.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const { sortByFullName, sortByUsername } = userSlice.actions;

export default userSlice.reducer;
