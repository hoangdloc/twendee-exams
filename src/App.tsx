import 'react-toastify/dist/ReactToastify.css';

import React, { Fragment } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import UserList from './modules/users/UserList';

function App (): JSX.Element {
  return (
    <Fragment>
      <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-20">
        <h1 className="font-semibold text-2xl">User Management App</h1>
        <UserList />
      </div>
      <ToastContainer
        autoClose={5000}
        draggablePercent={60}
        position={toast.POSITION.BOTTOM_RIGHT}
        theme="colored"
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
