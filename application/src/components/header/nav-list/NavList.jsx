import React, {memo} from 'react';
import s from './NavList.module.scss'
import db from '../../../db/db.json'

import {NavListItem} from "../nav-list-item/NavListItem";

const navElements = db['nav-routes'];

const NavList = memo(() => {
  return (
    <ul className={s.list}>
      {navElements.map((route) => (
        <NavListItem key={route.id} route={route}/>
      ))}
    </ul>
  );
});

export {NavList};
