import React from 'react';
import s from './Header.module.scss';
import {MainHeader} from '@/components/header/main-header/MainHeader';
import {SubHeader} from '@/components/header/sub-header/SubHeader';

const Header = () => {
  return (
    <header className={s.header}>
      <MainHeader/>
      <SubHeader />
    </header>
  );
};

export {Header};
