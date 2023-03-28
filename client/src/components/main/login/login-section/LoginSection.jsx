import React from 'react';
import s from './LoginSection.module.scss';
import {Link} from 'react-router-dom';
import {REGISTRATION_ROUTE} from '@/utils/consts';
import {LoginForm} from '@/components/main/login/login-form/LoginForm';

const LoginSection = () => {
  return (
    <section className={s.wrap}>
      <div className={s.content}>
        <h2 className={s.title}>Авторизация</h2>
        <p className={s.desc}>Авторизуйтесь, чтобы начать публиковать свои объявления</p>
        <LoginForm/>
        <p className={s.register}>Еще нет аккаунта?
          <Link to={REGISTRATION_ROUTE} className={s.register_link}> Создайте аккаунт</Link>
        </p>
      </div>
    </section>
  );
};

export {LoginSection};
