import React from 'react';
import s from './NewsCardItem.module.scss';
import {useNavigate} from 'react-router-dom';
import {NEWS_ROUTE} from '@/utils/consts';

const NewsCardItem = ({newCard}) => {
  const navigate = useNavigate();

  const openNews = () => {
    navigate(`${NEWS_ROUTE}/${newCard.id}`);
  };

  return (
    <li className={s.wrap}>
      <img className={s.img} src={newCard.img} onClick={openNews} alt="news"/>
      <h2 className={s.title}>{newCard.title}</h2>
      <p className={s.desc}>{newCard.description}</p>
      <div className={s.bottom}>
        <span className={s.date}>{newCard.date}</span>
        <button className={s.button} onClick={openNews}>Читать</button>
      </div>
    </li>
  );
};

export {NewsCardItem};
