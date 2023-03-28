import React from 'react';
import {HomeFilterBlock} from '@/components/main/home/home-filter-block/HomeFilterBlock';
import {HomeRentPhoto} from '@/components/main/home/home-rent-photo/HomeRentPhoto';
import {HomeRentList} from '@/components/main/home/home-rent-list/HomeRentList';
import {HomeApartmentsCity} from '@/components/main/home/home-apartments-city/HomeApartmentsCity';
import {HomeRentGeo} from '@/components/main/home/home-rent-geo/HomeRentGeo';
import {HomeRentAbout} from '@/components/main/home/home-rent-about/HomeRentAbout';

const HomeSection = () => {
  return (
    <section>
      <HomeFilterBlock/>

      <div style={{display: 'flex', width: '100%', maxWidth: '1280px', margin: '0 auto'}}>
        <HomeRentPhoto/>
        <HomeRentList/>
      </div>

      <HomeApartmentsCity/>
      <HomeRentGeo/>
      <HomeRentAbout/>
    </section>
  );
};

export {HomeSection};
