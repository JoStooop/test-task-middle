import React, {Suspense} from 'react';
import {LoadingPage} from "../../pages/loading-page/LoadingPage";

const LoadingWrap = ({children}) => {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <main className='main wrapper'>
        {children}
      </main>
    </Suspense>
  );
};

export {LoadingWrap};
