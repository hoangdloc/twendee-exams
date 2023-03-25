import { createSlice } from '@reduxjs/toolkit';

import { IUser, IUserApi } from '../@types/user';
import { IUserState } from '../@types/userState';
import { getListUsersAction } from '../actions/userAction';

const initialState: IUserState = {
  users: [] as IUser[],
  loading: true
};

export const homeSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListUsersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListUsersAction.fulfilled, (state, action) => {
        const usersFromApi = action.payload;

        const convertUsersApiToUsers = (usersApi: IUserApi[]): IUser[] => {
          const users = usersApi.map((userApi) => {
            const user: IUser = {
              title: userApi.name.title,
              first: userApi.name.first,
              last: userApi.name.last,
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

export default homeSlice.reducer;
