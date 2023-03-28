import React, {Suspense} from 'react';
import {useLocation, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {publicRoutes, privateRoutes} from '@/routes';
import {getAuthUser} from '@/redux/reducers/user/userSelector';
import {Spinner} from '@/components/ui/spinner/Spinner';

const RoutesPage = () => {
  const location = useLocation();

  const isAuth = useSelector(getAuthUser);

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes location={location} key={location.pathname}>
        {publicRoutes.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component/>}></Route>
        ))}
        {isAuth && privateRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>}></Route>,
        )}
      </Routes>
    </Suspense>
  );
};

export {RoutesPage};
