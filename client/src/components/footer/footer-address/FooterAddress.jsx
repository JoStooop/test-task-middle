import React from 'react';
import s from './FooterAddress.module.scss';
import logo from '@/assets/images/logo.svg';

import {Link} from 'react-router-dom';
import {HOME_ROUTE} from '@/utils/consts';

const FooterAddress = () => {
  return (
    <div className={s.wrap}>
      <Link to={HOME_ROUTE} className={s.link}>
        <img src={logo} alt="логотип" className={s.logo}/>
        <span className={s.text}>СДАЁМ БАЙ</span>
      </Link>
      <address className={s.address}>
        <p className={s.address_desc}>ИП Шушкевич Андрей Викторович</p>
        <p className={s.address_desc}>УНП 192602485 Минским горисполкомом 10.02.2016</p>
        <span className={s.address_desc}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
        <p className={s.address_desc}>
          <Link to={`tel:${process.env.REACT_APP_PHONE}`} className={s.address_desc_link}>{process.env.REACT_APP_PHONE}</Link>
          , sdaem@sdaem.by
        </p>
        <span className={s.address_desc}>Режим работы: 08:00-22:00</span>
      </address>
    </div>
  );
};

export {FooterAddress};
