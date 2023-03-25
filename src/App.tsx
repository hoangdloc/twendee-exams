import 'react-toastify/dist/ReactToastify.css';

import React, { Fragment, lazy, Suspense } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserList = lazy(async () => await import('./modules/users/UserList'));

function App (): JSX.Element {
  return (
    <Suspense fallback={<div className='p-8 text-lg'>Loading...</div>}>
      <Fragment>
        <UserList />
        <ToastContainer
          autoClose={5000}
          draggablePercent={60}
          position={toast.POSITION.BOTTOM_RIGHT}
          theme="colored"
          pauseOnHover
        />
      </Fragment>
    </Suspense>
  );
}

export default App;
