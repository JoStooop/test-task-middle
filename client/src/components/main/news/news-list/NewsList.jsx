import React from 'react';
import s from './NewsList.module.scss';
import {NewsCardItem} from '@/components/main/news/news-card-item/NewsCardItem';

const NewsList = (props) => {
  const {data, firstContentIndex, lastContentIndex} = props;

  const isDataLength = data.length === 0;

  return (
    <ul className={s.list}>
      {isDataLength && <p className={s.text}>Новостей не найдено. Повторите поиск...</p>}
      {data
          .slice(firstContentIndex, lastContentIndex)
          .map((newCard) => <NewsCardItem key={newCard.id} newCard={newCard}/>)
      }
    </ul>
  );
};

export {NewsList};
