import React, {useState} from 'react';
import s from './ApartmentsSection.module.scss';
import {Link} from 'react-router-dom';
import plural from 'plural-ru';

import {Breadcrumb} from '@/components/ui/bredcrumbs/Breadcrumb';
import {FilterRecommended} from '@/components/common/filter-recommended/FilterRecommended';
import {Filter} from '@/components/common/filter/Filter';
import {ApartmentsSort} from '@/components/main/apartments/apartments-sort/ApartmentsSort';
import {Apartment} from '@/components/common/apartment/Apartment';
import usePagination from '@/hooks/usePagination';
import {Pagination} from '@/components/ui/pagination/Pagination';

const ApartmentsSection = ({city, apartments}) => {
  const [sortList, setSortList] = useState(false);
  const [sortApartments, setSortApartments] = useState(apartments);

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
    count: sortApartments.length,
  });

  return (
    <section className={s.wrap}>
      <div className={s.header}>
        <Breadcrumb
          title={city ? `Квартиры в ${city}` : 'Квартиры на сутки'}
          link={city ? `/apartments/${city}` : '/apartments'}
        />
        <p className={s.title}>{`Аренда квартир на сутки ${city ? `в ${city}` : ''}`}</p>
        <FilterRecommended/>
      </div>

      <Filter data={apartments} setSortData={setSortApartments}/>

      <div className={s.content}>
        <div className={s.sort}>
          <ApartmentsSort/>
          <button className={`${s.list} ${sortList ? s.list_active : ''}`}
            onClick={() => setSortList(true)}>Список
          </button>
          <button className={`${s.tile} ${!sortList ? s.tile_active : ''}`}
            onClick={() => setSortList(false)}>Плитка
          </button>
          <Link to="/" className={s.map}>Показать на карте</Link>
        </div>
        <p className={s.result}>
          Найдено {plural(sortApartments.length, '%d результат', '%d результата', '%d результатов')}
        </p>
        <ul className={`${s.apartments} ${sortList ? s.apartments_list : ''}`}>
          {sortApartments.length && sortApartments
              .slice(firstContentIndex, lastContentIndex)
              .map((apartment) => <Apartment key={apartment.id} data={apartment} sortList={sortList} mainpage={false}/>)
          }
        </ul>
      </div>
      <div className={s.footer}>
        {apartments.length > 0 &&
          <Pagination
            page={page}
            gaps={gaps}
            setPage={setPage}
            totalPages={totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
            visibility={true}/>}
      </div>
    </section>
  );
};

export {ApartmentsSection};
