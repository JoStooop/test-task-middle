import React from 'react';
import {Header} from '@/components/header/Header';
import {Footer} from '@/components/footer/Footer';
import {NewsSection} from '@/components/main/news/news-section/NewsSection';

const NewsPage = () => {
  return (
    <>
      <Header />
      <NewsSection />
      <Footer />
    </>

  );
};

export default NewsPage;
