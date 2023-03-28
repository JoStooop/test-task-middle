import React from 'react';
import s from './ContactsForm.module.scss';
import {useFormik} from 'formik';
import {validateFormContacts} from '@/helpers/validate';
import {isEmptyObject} from '@/helpers/isEmpty';
import {Input} from '@/components/ui/input/Input';
import {Textarea} from '@/components/ui/textarea/Textarea';

const ContactsForm = ({setActive}) => {
  const formik = useFormik({
    initialValues: {name: '', email: '', message: ''},
    validate: validateFormContacts,
    onSubmit: (values, {resetForm}) => {
      resetForm();
      setActive(true);
    },
  });

  const isNotValid = isEmptyObject(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.row}>
        <Input
          label='Ваше имя'
          type="name"
          placeholder="Имя"
          error={formik.errors.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>

        <Input
          label='Ваша электронная почта'
          type="email"
          placeholder="Почта"
          error={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
      </div>

      <Textarea
        label='Ваше сообщение'
        name='message'
        placeholder='Почта'
        error={formik.errors.message}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      <div>
        <button type="submit" className={`${s.button} ${isNotValid ? s.button_disabled : ''}`}
          disabled={isNotValid}>Отправить
        </button>
      </div>

    </form>
  );
};

export {ContactsForm};
