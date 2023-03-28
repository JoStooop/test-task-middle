import React from 'react';
import {Header} from '@/components/header/Header';
import {Footer} from '@/components/footer/Footer';
import {ErrorSection} from '@/components/main/error/error-section/ErrorSection';

const ErrorPage = () => {
  return (
    <>
      <Header/>
      <ErrorSection/>
      <Footer/>
    </>
  );
};

export default ErrorPage;
