import React from 'react';
import s from './MapLocation.module.scss';
import {Link} from 'react-router-dom';

const MapLocation = (props) => {
  const {title, desc} = props;

  return (
    <div className={s.wrap}>
      <p className={s.desc}>{title}</p>
      <p className={`${s.desc} ${s.desc_size}`}>{desc}</p>
      <Link className={s.button}>Открыть карту</Link>
    </div>
  );
};

export {MapLocation};
