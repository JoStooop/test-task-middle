import React from 'react';
import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s.wrap}>
      <span className={s.loader}></span>
    </div>
  );
};

export {Spinner};
