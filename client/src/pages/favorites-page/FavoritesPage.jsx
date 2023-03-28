import React from 'react';
import {Header} from '@/components/header/Header';
import {Footer} from '@/components/footer/Footer';
import {FavoriteSection} from '@/components/main/favorites/favorite-section/FavoriteSection';

const FavoritesPage = () => {
  return (
    <>
      <Header/>
      <FavoriteSection/>
      <Footer/>
    </>
  );
};

export default FavoritesPage;
