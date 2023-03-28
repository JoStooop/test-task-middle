import React from 'react';
import s from './HomeFilterBlock.module.scss';
import {HomeFilterNavigation} from '@/components/main/home/home-filter-navigation/HomeFilterNavigation';

const HomeFilterBlock = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Sdaem.by - у нас живут <span className={s.title_yellow}>ваши объявления</span></h1>
      <HomeFilterNavigation/>
    </div>
  );
};

export {HomeFilterBlock};
