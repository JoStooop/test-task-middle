import React from 'react';
import s from './NewsHeader.module.scss';
import {Search} from '@/components/common/search/Search';

const NewsHeader = (props) => {
  const {search, setSearch, searchHandler} = props;

  return (
    <div className={s.header}>
      <p className={s.header_title}>Новости</p>
      <Search
        placeholder="Поиск по статьям"
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}/>
    </div>
  );
};

export {NewsHeader};
