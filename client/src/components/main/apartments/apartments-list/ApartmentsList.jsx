import React from 'react';
import s from './ApartmentsList.module.scss';
import {Link} from 'react-router-dom';

const ApartmentsList = () => {
  return (
    <ul className={s.list}>
      <li>
        <Link to='/' className={s.link}>Квартиры в Минске</Link>
      </li>
      <li>
        <Link to='/' className={s.link}>Квартиры в Гомеле</Link>
      </li>
      <li>
        <Link to='/' className={s.link}>Квартиры в Бресте</Link>
      </li>
      <li>
        <Link to='/' className={s.link}>Квартиры в Витебске</Link>
      </li>
      <li>
        <Link to='/' className={s.link}>Квартиры в Гродно</Link>
      </li>
      <li>
        <Link to='/' className={s.link}>Квартиры в Могилеве</Link>
      </li>
    </ul>
  );
};

export {ApartmentsList};
