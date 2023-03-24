import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import axiosInstance from '../../../config/axios';

interface IGetListUsers {
  page?: number
  results?: number
}

export const getListUsersAction = createAsyncThunk(
  'getListUsers',
  async ({ page = 1, results = 100 }: IGetListUsers) => {
    try {
      const response = await axiosInstance.get('/', {
        params: { page, results }
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
