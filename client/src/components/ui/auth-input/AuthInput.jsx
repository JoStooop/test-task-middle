import React from 'react';
import s from './AuthInput.module.scss';

const AuthInput = (props) => {
  const {placeholder, value, onChange, onBlur, type, img, error} = props;

  let updateType;

  if (type === 'repeatPassword') {
    updateType = 'password';
  } else {
    updateType = type;
  }

  return (
    <div className={`${s.wrap} ${error && s.wrap_error}`}>
      <img src={img} alt="иконка" className={s.img}/>
      <input
        className={s.input}
        id={type}
        name={type}
        type={updateType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
    </div>
  );
};

export {AuthInput};
