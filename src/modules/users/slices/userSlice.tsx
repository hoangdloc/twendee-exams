import { createSlice } from '@reduxjs/toolkit';

import { getListUsersAction } from '../actions/userAction';
import { IUser } from '../types/user';
import { IUserState } from '../types/userState';

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
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getListUsersAction.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default homeSlice.reducer;
