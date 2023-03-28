import React from 'react';
import s from './HomeNewsItem.module.scss';
import {Link} from 'react-router-dom';

const HomeNewsItem = (props) => {
  const {data} = props;
  return (
    <li className={s.item}>
      <Link to='/' className={s.link}>{data.title}</Link>
      <p className={s.date}>{data.date}</p>
    </li>
  );
};

export {HomeNewsItem};
