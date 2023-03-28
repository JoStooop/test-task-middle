import React from 'react';
import s from './HomeNewsList.module.scss';
import {useSelector} from 'react-redux';
import {HomeNewsItem} from '@/components/main/home/home-news-item/HomeNewsItem';
import {getNews} from '@/redux/reducers/news/newsSelector';

const HomeNewsList = () => {
  const news = useSelector(getNews);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <h3 className={s.list_caption}>Новости</h3>
      </li>
      {news.length ?
        (
          news
              .slice(1, 6)
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((item) =>
                <HomeNewsItem key={item.id} data={item}/>,
              )
        ) :
        (
        <p className={s.text}>Новости отсутствуют</p>
        )
      }
    </ul>
  );
};

export {HomeNewsList};
