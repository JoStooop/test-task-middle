import React from 'react';
import s from './HomeRentPhoto.module.scss';
import {Link} from 'react-router-dom';

const HomeRentPhoto = () => {
  const cities = [{id: 1, city: 'Minsk'}, {id: 2, city: 'Гомель'}];

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <h2 className={s.title}>снять квартиру</h2>
        <p className={s.desc}>Квартиры на сутки</p>
        <ul className={s.cities_list}>
          {cities.map((city) =>
            <li key={city.id} className={s.cities_item}>
              <Link to='/' className={s.cities_link}>{city.city}</Link>
            </li>,
          )}
        </ul>
      </li>
      <li className={s.item}>
        <h2 className={s.title}>снять коттедж на праздник</h2>
        <p className={s.desc}>Коттеджи и усадьбы</p>
        <button className={s.button}></button>
      </li>
      <li className={s.item}>
        <h2 className={s.title}>попариться в бане с друзьями</h2>
        <p className={s.desc}>Бани и сауны</p>
        <button className={s.button}></button>
      </li>
      <li className={s.item}>
        <h2 className={s.title}>если срочно нужна машина</h2>
        <p className={s.desc}>Авто на прокат</p>
        <button className={s.button}></button>
      </li>
    </ul>
  );
};

export {HomeRentPhoto};
