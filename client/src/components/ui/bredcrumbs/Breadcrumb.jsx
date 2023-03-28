import React from 'react';
import s from './Breadcrumb.module.scss';
import {Link} from 'react-router-dom';
import {HOME_ROUTE} from '@/utils/consts';

const Breadcrumb = (props) => {
  const {title, link, item} = props;

  return (
    <nav>
      <ul className={s.breadcrumb}>
        <li className={s.breadcrumb__item}>
          <Link to={HOME_ROUTE} className={`${s.link} ${s.link_icon}`} />
        </li>
        <li className={s.breadcrumb__item}>
          <Link to={link} className={`${s.link} ${!item && s.link_active}`}>{title}</Link>
        </li>
        {item &&
          <li className={s.breadcrumb__item}>
            <Link to={HOME_ROUTE} className={`${s.link} ${s.link_active}`}>{item}</Link>
          </li>}
      </ul>
    </nav>);
};

export {Breadcrumb};
