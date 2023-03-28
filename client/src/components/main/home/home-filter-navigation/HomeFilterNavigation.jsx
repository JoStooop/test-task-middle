import React from 'react';
import s from './HomeFilterNavigation.module.scss';
import {Filter} from '@/components/common/filter/Filter';

const HomeFilterNavigation = () => {
  return (
    <div className={s.wrap}>
      <div className={s.block}>
        <button className={`${s.button} ${s.button_active}`}>Квартиры на сутки</button>
        <button className={s.button}>
          Коттежи и усадьбы
        </button>
        <button className={s.button}>
          Бани и сауны
        </button>
        <button className={s.button}>
          Авто напрокат
        </button>
      </div>
      <Filter mainPage={true}/>
    </div>
  );
};

export {HomeFilterNavigation};
