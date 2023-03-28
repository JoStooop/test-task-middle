import React from 'react';
import s from './Search.module.scss';

const Search = (props) => {
  const {placeholder, search, setSearch, searchHandler} = props;

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className={s.wrap} onSubmit={searchHandler}>
      <input
        className={s.input}
        type="text"
        onChange={inputHandler}
        value={search}
        placeholder={placeholder}
      />
      <button className={s.button} onClick={searchHandler}/>
      <div className={s.wrap_bg}/>
    </form>
  );
};

export {Search};
