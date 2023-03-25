import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '../../../config/axios';
import { USER_RESULT } from '../../../config/constant';

interface IGetListUsers {
  results?: number
}

export const getListUsersAction = createAsyncThunk(
  'getListUsers',
  async ({ results = USER_RESULT }: IGetListUsers) => {
    try {
      const response = await axiosInstance.get('/', {
        params: { results, nat: 'gb,us,ca' }
      });
      return response.data.results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        await Promise.reject(new Error(error.message));
      } else {
        console.error(error);
      }
    }
  }
);
