import React from 'react';
import s from './SubHeader.module.scss';
import logo from '@/assets/images/logo.svg';
import {NavLink} from 'react-router-dom';
import {APARTMENTS_ROUTE, HOME_ROUTE} from '@/utils/consts';

const SubHeader = ({city}) => {
  return (
    <section className={s.subheader}>
      <ul>
        <li>
          <NavLink to={HOME_ROUTE} className={s.link}>
            <img src={logo} alt="логотип"/>
          </NavLink>
        </li>
        <li>
          <NavLink to={APARTMENTS_ROUTE} className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : s.link}>
            {city ? `Квартиры в ${(city)}` : 'Квартиры на сутки'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/cottages' className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : s.link}>
            Коттеджи и усадьбы
          </NavLink>
        </li>
        <li>
          <NavLink to='/sauna' className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : s.link}>
            Бани и Сауны
          </NavLink>
        </li>
        <li>
          <NavLink to='/auto' className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : s.link}>
            Авто напрокат
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : s.link}>
            <button className={s.button}>+ Разместить объявление</button>
          </NavLink>
        </li>
      </ul>
    </section>

  );
};

export {SubHeader};
