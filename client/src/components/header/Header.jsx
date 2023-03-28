import React, {memo} from 'react';
import s from './Header.module.scss'

import {NavList} from "./nav-list/NavList";

const Header = memo(() => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavList/>
      </nav>
    </header>
  );
});

export {Header};
