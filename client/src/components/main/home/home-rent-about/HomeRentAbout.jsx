import React from 'react';
import s from './HomeRentAbout.module.scss';
import flat from '@/assets/images/icons/mainpage/flatMinsk.svg';

import {Link} from 'react-router-dom';
import {NEWS_ROUTE} from '@/utils/consts';
import {HomeNewsList} from '@/components/main/home/home-news-list/HomeNewsList';
import {useSelector} from 'react-redux';
import {getNews} from '@/redux/reducers/news/newsSelector';

const HomeRentAbout = () => {
  const news = useSelector(getNews);
  return (
    <div className={s.wrap}>
      <div className={s.about}>
        <h2 className={s.about_title}>ЧТО ТАКОЕ SDAEM.BY</h2>
        <h3 className={s.about_subtitle}>Квартира на сутки в Минске</h3>
        <div className={s.flat}>
          <img src={flat} alt="фото квартиры" className={s.flat_image} />
          <div>
            <h3 className={s.flat_title}>Нужна квартира на сутки в Минске?</h3>
            <p className={`${s.flat_par} ${s.flat_par_mb}`}>На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span className={s.flat_par_fw}>более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
            <p className={s.flat_par}>В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
              с джакузи.</p>
          </div>
        </div>
        <p className={s.flat_par}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.   </p>
      </div>
      <div className={s.news}>
        <HomeNewsList />
        {news.length ? <Link to={NEWS_ROUTE} className={s.news_button}>Посмотреть все</Link> : null }
      </div>
    </div>
  );
};

export {HomeRentAbout};
