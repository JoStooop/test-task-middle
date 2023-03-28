import React from 'react';
import s from './HomeRentGeo.module.scss';

import clients from '@/assets/images/icons/mainpage/clients.svg';
import promotion from '@/assets/images/icons/mainpage/promotion.svg';
const HomeRentGeo = () => {
  return (
    <div className={`${s.wrap} ${s.wrap_bg}`}>
      <p className={s.desc}>Поиск квартир на карте</p>
      <p className={`${s.desc} ${s.desc_size}`}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
      <button className={`${s.button} ${s.button_mb}`}>Открыть карту</button>
      <div className={s.geo}>
        <div className={s.list}>
          <div className={s.advice}>
            <img src={clients} alt="иконка совета" className={`${s.image} ${s.image_mr}`} />
            <h2 className={s.advice_title}>Начните привлекать
              клиентов бесплатно!</h2>
          </div>
          <p className={s.advice_desc}>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span className={s.advice_desc_weight_600}>бесплатно создавать и публиковать</span>  объявления на сайте. </p>
          <button className={s.advice_button}>+  Разместить объявление</button>
        </div>
        <div className={s.list}>
          <div className={`${s.advice} ${s.advice_mb}`}>
            <img src={promotion} alt="иконка совета" className={`${s.image} ${s.image_rm}`} />
            <h2 className={s.advice_title}>Поднимайте
              объявления</h2>
          </div>
          <p className={s.advice_desc}>Вы в любое время можете <span className={s.advice_desc_weight_600}>поднимать</span> объявления <span className={s.advice_desc_weight_600}>вверх первой страницы</span> каталога,
            они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</p>
          <button className={`${s.advice_button} ${s.advice_button_after}`}>Узнать стоимость услуги</button>
        </div>
        <div className={`${s.list} ${s.list_bg}`}>
          <h2 className={`${s.advice_title} ${s.advice_title_bl}`}>Приоритет Gold </h2>
          <p className={`${s.advice_desc} ${s.advice_desc_fs}`}>Приоритетное размещение <span className={s.advice_desc_weight_700}>Gold</span> позволяет <span className={s.advice_desc_weight_700}>закрепить ваше объявление</span> в верхней части каталога!</p>
          <p className={s.advice_desc}>Gold объявления <span className={s.advice_desc_weight_700}>перемещаются
            каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.</p>
          <button className={`${s.advice_button} ${s.advice_button_color}`}>Еще о тарифе Gold</button>
        </div>
      </div>
    </div>
  );
};

export {HomeRentGeo};
