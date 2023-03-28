import React from 'react';
import s from './ErrorSection.module.scss';
import {Link} from 'react-router-dom';

const ErrorSection = () => {
  return (
    <section className={s.wrap}>
      <h1 className={s.title}>Ошибка 404</h1>
      <p className={s.desc}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
      <Link to='/' className={s.button}>Вернуться на главную</Link>
    </section>
  );
};

export {ErrorSection};
