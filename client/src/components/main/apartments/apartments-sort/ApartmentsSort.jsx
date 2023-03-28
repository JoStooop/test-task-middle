import React, {useState} from 'react';
import s from './ApartmentsSort.module.scss';
// import { apartmentsSlice } from '../store/slices/apartmentsSlice';


const ApartmentsSort = () => {
  const [sort, setSort] = useState('');

  const changeHandler = async (event) => {
    await setSort(event.target.value);
  };

  return (
    <select
      className={`${s.select} ${s.select_bg}`}
      name="sort"
      value={sort}
      onChange={changeHandler}>
      <option>По умолчанию</option>
      <option>По возрастанию цены</option>
      <option>По убыванию цены</option>
    </select>
  );
};

export {ApartmentsSort};
