import React from 'react';
import s from './Input.module.scss';

const Input = (props) => {
  const {label, type, placeholder, error, value, onChange, onBlur} = props;

  let updateType;

  if (type === 'repeatPassword') {
    updateType = 'password';
  } else {
    updateType = type;
  }

  return (
    <div className={s.wrap}>
      <label className={s.label} htmlFor="email">{label}</label>
      <input
        className={s.input}
        id={type}
        name={type}
        type={updateType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
      {error ? <div className={s.error_msg}>{error}</div> : null}
    </div>
  );
};

export {Input};
