import React from 'react';
import s from './Textarea.module.scss';

const Textarea = (props) => {
  const {label, name, placeholder, value, error, onChange, onBlur} = props;

  return (
    <div className={s.wrap}>
      <label className={s.label} htmlFor={name}>{label}</label>
      <textarea
        className={s.textarea}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
      {error ? <div className={s.error_msg}>{error}</div> : null}

    </div>
  );
};

export {Textarea};
