import React from 'react';
import s from './Pagination.module.scss';

const Pagination = (props) => {
  const {page, totalPages, gaps, setPage, prevPage, nextPage, visibility} = props;

  const afterLength = gaps.after.length;
  const beforeLength = gaps.before.length;

  return (
    <div className={`${s.pagination} ${visibility && s.pagination_center}`}>
      {visibility &&
        <button onClick={prevPage}
          className={`${s.button} ${page === 1 && s.button_disabled} ${s.button_left}`}>
          &lt;
        </button>}
      {visibility &&
        <ul className={s.list}>
          <li className={`${s.item} ${page === 1 && s.item_active}`}
            onClick={() => setPage(gaps.before[0])}>
            {gaps.before[0] || 1}
          </li>
          {beforeLength > 1 ? <span className={s.pagination__dotes}>...</span> : null}
          {gaps.paginationGroup.map((el, index) => (
            <li className={`${s.item} ${page === el ? s.item_active : ''}`}
              onClick={() => setPage(el)}
              key={index}>
              {el}
            </li>
          ))}
          {afterLength > 1 ? <span className={s.pagination__dotes}>...</span> : null}
          {afterLength > 0 &&
            <li onClick={() => setPage(totalPages)}
              className={`${s.item} ${page === totalPages && s.item_active}`}>
              {totalPages}
            </li>}
        </ul>}
      {visibility &&
        <button onClick={nextPage}
          className={`${s.button} ${page === totalPages && s.button_disabled} ${s.button_right}`}>
          &gt;
        </button>}
    </div>
  );
};

export {Pagination};
