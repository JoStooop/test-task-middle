import React, {lazy, useState, useEffect} from 'react';
import {useLocation, Routes, Route} from 'react-router-dom';

import {LoadingPage} from '../loading-page/LoadingPage';
import {LoadingWrap} from "../../components/loading-wrap/LoadingWrap";

const HomePage = lazy(() => import('../home-page/HomePage'));
const FormPage = lazy(() => import('../form-page/FormPage'));
const NotesPage = lazy(() => import('../notes-page/NotesPage'));
const NotePageId = lazy(() => import('../note-page-id/NotePageId'));
const Page404 = lazy(() => import('../error-page/ErrorPage'));

const RoutesPage = () => {
  const location = useLocation();

  const [suspended, setSuspended] = useState(true);

  useEffect(() => {
    setTimeout(() => setSuspended((s) => (s ? s : !s)), 0);
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={
        <LoadingWrap>
          {suspended ? <HomePage/> : <LoadingPage/>}
        </LoadingWrap>
      }
      />
      <Route path='/form' element={
        <LoadingWrap>
          {suspended ? <FormPage/> : <LoadingPage/>}
        </LoadingWrap>
      }
      />
      <Route path='/notes' element={
        <LoadingWrap>
          {suspended ? <NotesPage/> : <LoadingPage/>}
        </LoadingWrap>
      }
      />
      <Route path='/notes/:id' element={
        <LoadingWrap>
          {suspended ? <NotePageId/> : <LoadingPage/>}
        </LoadingWrap>
      }
      />
      <Route path='*' element={
        <LoadingWrap>
          {suspended ? <Page404/> : <LoadingPage/>}
        </LoadingWrap>
      }
      />
    </Routes>
  );
};

export {RoutesPage};
