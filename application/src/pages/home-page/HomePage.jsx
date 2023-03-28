import React from 'react';
import s from './HomePage.module.scss'
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div className={s.wrap}>
      <Link to='/form' className={s.title}>
        Создайте заметку
      </Link>
    </div>
  );
};

export default HomePage;
