import React from 'react';
import s from './PaymentIcon.module.scss';

const PaymentIcon = (props) => {
  const {img, size} = props;

  return (
    <li className={s.item}>
      <img src={img} alt="иконка" style={{width: size, height: size}} />
    </li>
  );
};

export {PaymentIcon};
