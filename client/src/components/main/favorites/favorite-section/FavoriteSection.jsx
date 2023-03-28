import React from 'react';
import s from './FavoriteSection.module.scss';

const FavoriteSection = () => {
  const error = true;

  return (
    <section className={s.wrap}>
      {error && (
        <p className={s.text}>Сохраненные апартаменты не найдены..</p>
      )}
    </section>
  );
};

export {FavoriteSection};
