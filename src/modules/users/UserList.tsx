import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AppDispatch, RootState } from '../../redux/store';
import { Spinner } from '../../shared/components/loader';
import { Table } from '../../shared/components/table';
import { ColumnType } from '../../shared/components/table/Table';
import { IUser } from './@types/user';
import { getListUsersAction } from './actions/userAction';

const columns: Array<ColumnType<IUser, keyof IUser>> = [
  {
    key: 'title',
    header: 'Title',
    dataType: 'text'
  },
  {
    key: 'first',
    header: 'First Name',
    dataType: 'text'
  },
  {
    key: 'last',
    header: 'Last Name',
    dataType: 'text'
  },
  {
    key: 'username',
    header: 'Username',
    dataType: 'text'
  },
  {
    key: 'thumbnail',
    header: 'Thumbnail',
    dataType: 'image'
  }
];

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.userSlice.users);
  const loading = useSelector((state: RootState) => state.userSlice.loading);
  // loading = true;

  const loadUsers = async (): Promise<void> => {
    try {
      await dispatch(getListUsersAction({}));
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    void loadUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-8">
      <h1 className="text-2xl font-semibold">User Management App</h1>
      {loading ? <TableLoader /> : null}
      {!loading
        ? <Table
          data={users}
          columns={columns}
          limit={10}
        />
        : null}
    </div>
  );
};

const TableLoader: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-40 min-w-full bg-white border rounded-lg'><Spinner/></div>
  );
};

export default UserList;
