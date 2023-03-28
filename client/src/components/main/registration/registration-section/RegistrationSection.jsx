import React from 'react';
import s from './RegistrationSection.module.scss';
import {Link} from 'react-router-dom';
import {LOGIN_ROUTE} from '@/utils/consts';
import {RegistrationForm} from '@/components/main/registration/registration-form/RegistrationForm';

const RegistrationSection = () => {
  return (
    <section className={s.wrap}>
      <div className={s.register}>
        <div className={s.auth}>
          <h2 className={s.auth_title}>Регистрация</h2>
          <RegistrationForm/>
        </div>
        <div className={s.desc}>
          <h2 className={s.title_right}>Пользователь обязуется:</h2>
          <p className={s.item_right}>  &bull; предоставлять достоверную и актуальную информацию при регистрации
            и добавлении объекта;</p>
          <p className={s.item_right}>  &bull; добавлять фотографии объектов соответствующие действительности.
            Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем,
            если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права
            и законные интересы других граждан либо действующее законодательство Республики Беларусь.</p>
          <p className={s.auth_text}>Уже есть аккаунт?
            <Link to={LOGIN_ROUTE} className={s.link}> Войдите</Link>
          </p>
        </div>
      </div>

    </section>
  );
};

export {RegistrationSection};
