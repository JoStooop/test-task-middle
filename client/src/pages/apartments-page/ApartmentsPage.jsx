import React from 'react';
import {useSelector} from 'react-redux';
import {Footer} from '@/components/footer/Footer';
import {Header} from '@/components/header/Header';
import {ApartmentsShareNetworks} from '@/components/main/apartments/apartments-share-networks/ApartmentsShareNetworks';
import {ApartmentsSection} from '@/components/main/apartments/apartments-section/ApartmentsSection';
import {getApartments} from '@/redux/reducers/apartments/appartmentsSelector';
import {MapLocation} from '@/components/ui/map-location/MapLocation';

const ApartmentsPage = () => {
  const apartments = useSelector(getApartments);
  return (
    <>
      <Header/>
      <ApartmentsSection apartments={apartments}/>
      <ApartmentsShareNetworks/>
      <MapLocation
        title='Показать найденные квартиры на карте'
        desc='Ищите новостройки рядом с работой, парком или родственниками'/>
      <Footer/>
    </>
  );
};

export default ApartmentsPage;
