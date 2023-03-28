import React from 'react';
import s from './HomeRentList.module.scss';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {amountIdenticalData, countSelectedCottages, foundSortedCities, foundSortedCottages} from '@/helpers/helpers';
import {getApartments} from '@/redux/reducers/apartments/appartmentsSelector';
import {getCottages} from '@/redux/reducers/cottages/cottagesSelector';

const showSelectedCities = ['Гомель', 'Минск', 'Витебск'];
const showSelectedCottages = ['Агроусадьба', 'Коттедж', 'Загородный комплекс', 'База отдыха'];
const HomeRentList = () => {
  const apartments = useSelector(getApartments);
  const cottages = useSelector(getCottages);

  const showFoundSortedCities = foundSortedCities(showSelectedCities, apartments);
  const showFoundSortedCottages = foundSortedCottages(showSelectedCottages, cottages);

  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        <li className={s.item}>
          <p>Квартиры</p>
          <ul className={s.category_list}>
            {apartments.length > 0 &&
              showFoundSortedCities.map((city) =>
                <li className={s.category_item} key={city}>
                  <Link to='/' className={s.block_list}>
                    <p className={s.block_geo}>Квартиры в {city}</p>
                    <span className={s.block_count}>{amountIdenticalData(apartments)[city]}</span>
                  </Link>
                </li>,
              )}
          </ul>
        </li>
        <li className={s.item}>
          <p> Коттеджи и усадьбы</p>
          <ul className={s.category_list}>
            {cottages.length > 0 &&
              showFoundSortedCottages.map((cottage) =>
                <li className={s.category_item} key={cottage}>
                  <Link to='/' className={s.block_list}>
                    <p className={s.block_geo}>{cottage}</p>
                    <span className={s.block_count}>{countSelectedCottages(showSelectedCottages, cottages)[cottage]}</span>
                  </Link>
                </li>,
              )}
            <li className={s.category_item}>
              <button className={s.button}>Еще</button>
            </li>
          </ul>
        </li>
        <li className={s.item}>
          <p> Популярные направления</p>
          <ul className={s.category_list}>
            <li className={s.category_item}>
              <Link to='/' className={s.block_list}>
                <p className={s.block_geo}>Коттеджи и усадьбы на о. Брасласких </p>
              </Link>
            </li>
            <li className={s.category_item}>
              <Link to='/' className={s.block_list}>
                <p className={s.block_geo}>Коттеджи и усадьбы (жилье) на Нарочи</p>
              </Link>
            </li>
            <li className={s.category_item}>
              <Link to='/' className={s.block_list}>
                <p className={s.block_geo}>Коттеджи и усадьбы (жилье) у воды,
                  на берегу, на озере</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export {HomeRentList};
