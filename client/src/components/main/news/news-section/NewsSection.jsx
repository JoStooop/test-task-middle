import React, {useState} from 'react';
import s from './NewsSection.module.scss';
import {Breadcrumb} from '@/components/ui/bredcrumbs/Breadcrumb';
import {useSelector} from 'react-redux';
import {getNews} from '@/redux/reducers/news/newsSelector';
import {Pagination} from '@/components/ui/pagination/Pagination';
import usePagination from '@/hooks/usePagination';
import {NewsHeader} from '@/components/main/news/news-header/NewsHeader';
import {NewsList} from '@/components/main/news/news-list/NewsList';
import {NEWS_ROUTE} from '@/utils/consts';

const NewsSection = () => {
  const news = useSelector(getNews);

  const [search, setSearch] = useState('');
  const [filteredNews, setFilteredNews] = useState(news);

  // const isNewsLength = news.length > 0;
  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 6,
    count: filteredNews.length,
  });

  const searchHandler = (event) => {
    event.preventDefault();
    filterNews(search);

    setSearch('');
  };

  const filterNews = (searchValue) => {
    const filtered = news.filter((news) =>
      news.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredNews(filtered);
  };


  // useEffect(() => {
  //   fetch('https://example.com/news')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setAllNews(data);
  //         setFilteredNews(data);
  //       })
  //       .catch((error) => console.error(error));
  // }, []);


  return (
    <div className={s.wrap}>
      <Breadcrumb title="Новости" link={NEWS_ROUTE}/>
      <NewsHeader search={search} setSearch={setSearch} searchHandler={searchHandler}/>
      {filteredNews &&
        <>
          <NewsList data={filteredNews} firstContentIndex={firstContentIndex} lastContentIndex={lastContentIndex}/>
          {filteredNews.length ?
            (
              <Pagination
                page={page}
                gaps={gaps}
                setPage={setPage}
                totalPages={totalPages}
                nextPage={nextPage}
                prevPage={prevPage}
                visibility={true}/>
            ) :
            null
          }
        </>
      }
    </div>
  );
};

export {NewsSection};
