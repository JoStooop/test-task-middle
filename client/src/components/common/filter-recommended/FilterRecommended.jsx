import React from 'react';
import s from './FilterRecommended.module.scss';
import {filterRecommendedList} from '@/utils/filterContst';

const FilterRecommended = () => {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Рекомендуем посмотреть</p>
      <ul className={s.list}>
        {filterRecommendedList.map((item) =>
          <li key={item.name} className={s.item}>
            <button className={s.button} >
              {item.name}
              <i className={s.button_reset} >&times;</i>
            </button>
          </li>,
        )}
      </ul>
    </div>
  );
};

export {FilterRecommended};
