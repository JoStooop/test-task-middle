import React from 'react';
import s from './HomeApartmentsCity.module.scss';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import usePagination from '@/hooks/usePagination';
import {Pagination} from '@/components/ui/pagination/Pagination';
import {getApartments} from '@/redux/reducers/apartments/appartmentsSelector';
import {Apartment} from '@/components/common/apartment/Apartment';
import {APARTMENTS_ROUTE} from '@/utils/consts';

const HomeApartmentsCity = () => {
  const apartments = useSelector(getApartments);
  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    setPage,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination({
    contentPerPage: 3,
    count: 3,
  });


  return (
    <div className={s.wrap}>
      <div className={s.city_bg}></div>
      <p className={s.desc}>КВАРТИРЫ НА СУТКИ</p>

      <div className={s.filter}>
        <h2 className={s.title}>Аренда квартир в Минске</h2>
        <select name="underground" className={`${s.select} ${s.select_ml}`} defaultValue="">
          <option disabled value="" className={s.option}>Метро</option>
        </select>
        <select name="area" className={s.select} defaultValue="">
          <option disabled value="" className={s.option}>Район</option>
        </select>
      </div>

      <ul className={s.list}>
        {apartments
            .slice(firstContentIndex, lastContentIndex)
            .map((apartment) => <Apartment key={apartment.id} data={apartment} sortList={false} mainpage={true} />)
        }
      </ul>
      <div className={s.count}>
        {apartments.length && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={true} />}

      </div>

      <div className={s.city_results}>
        <div className={s.results_count}>
          <p className={s.city_results_count}>{apartments.length} <span className={s.city_results_count_col}>+</span>
          </p>
          <p className={s.city_results_desc}>Предложений по Минску</p>
        </div>
        <Link to={APARTMENTS_ROUTE} className={s.city_results_button}>Посмотреть все</Link>
      </div>
    </div>
  );
};

export {HomeApartmentsCity};
