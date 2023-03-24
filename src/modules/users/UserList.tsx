import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

import { AppDispatch, RootState } from '../../redux/store';
import { getListUsersAction } from './actions/userAction';
import { IUser } from './types/user';

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.userSlice.users);

  const loadUsers = async (): Promise<void> => {
    try {
      await dispatch(getListUsersAction({ results: 10 }));
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

  const userItem = (user: IUser, key: string): JSX.Element => {
    return (
      <tr key={key}>
        <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.name.title}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.name.first}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.name.last}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-900">{user.login.username}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-900">
          <img src={user.picture.large} alt={user.login.username} />
        </td>
      </tr>
    );
  };

  return (
    <div className="rounded-lg w-full bg-white border">
      {false && <div>Toolbar</div>}
      <table className="min-w-full divide-y-2 divide-gray-200 text-base">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400">
              First Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400">
              Last Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400">
              Username
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400">
              Thumbnail
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.length > 0 && users.map(user => userItem(user, v4()))}
        </tbody>
      </table>
      {false && <div>Pagination</div>}
    </div>
  );
};

export default UserList;
