import React from 'react';
import s from './FooterAdsList.module.scss';
import {Link} from 'react-router-dom';
import {ApartmentsList} from '@/components/main/apartments/apartments-list/ApartmentsList';
import {CONTACTS_ROUTE, NEWS_ROUTE} from '@/utils/consts';
import {FooterNetworks} from '@/components/footer/footer-networks/FooterNetworks';
import {FooterPayment} from '@/components/footer/footer-payment/FooterPayment';

const FooterAdsList = () => {
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        <li>
          <Link to='/' className={`${s.link} ${s.link_bold}`}>Коттеджи и усадьбы</Link>
        </li>
        <li>
          <Link to='/' className={`${s.link} ${s.link_bold}`}>Бани и сауны</Link>
        </li>
        <li>
          <Link to='/' className={`${s.link} ${s.link_bold}`}>Авто на прокат</Link>
        </li>
        <li>
          <Link to='/' className={`${s.link} ${s.link_bold}`}>Квартиры</Link>
          <ApartmentsList />
        </li>
        <li>
          <Link to={NEWS_ROUTE} className={s.link}>Новости</Link>
        </li>
        <li>
          <Link to='/' className={s.link}>Размещение и тарифы</Link>
        </li>
        <li>
          <Link to='/' className={s.link}>Объявления на карте</Link>
        </li>
        <li>
          <Link to={CONTACTS_ROUTE} className={s.link}>Контакты</Link>
        </li>
      </ul>
      <div className={s.bottom}>
        <FooterNetworks />
        <FooterPayment />
      </div>
    </div>
  );
};

export {FooterAdsList};
