import React from "react";
import s from './FormPage.module.scss';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";

import {getNotes} from "../../redux/selectors/notesSelector";
import {setNote} from "../../redux/reducers/notesSlice";
import {onSubmitForm} from "../../helpers/helpers";

const FormPage = () => {
  const dispatch = useDispatch()
  const notes = useSelector(getNotes)

  const notify = () =>
    toast.success('Заметка создана', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const formik = useFormik({
    initialValues: {desc: '', signature: '',},
    validate: (values) => {
      let errors = {};
      const isValueSignature = values.signature

      if (!isValueSignature) {
        errors.signature = 'Укажите подпись.';
      } else if (isValueSignature.length < 3) {
        errors.signature = 'Минимум 3 символа.';
      } else if (isValueSignature.length > 70) {
        errors.signature = 'Максимум 70 символов.';
      }

      return errors;
    },
    onSubmit: (values, {resetForm}) => {
      resetForm();
      dispatch(setNote(onSubmitForm(values, notes.length + 1)));
      notify();
    },
  });

  const isValidationFailedDesc = formik.touched.desc && formik.errors.desc
  const isValidationFailedSignature = formik.touched.signature && formik.errors.signature

  return (
    <>
      <div className={s.wrap}>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <div className={s.form_elements}>

            <div className={s.form_elements__field}>
              <label className={s.form_elements__label} htmlFor='desc'>
                Заметка
              </label>
              <textarea
                className={`${s.form_elements__input} ${s.form_elements__textarea}`}
                id='desc'
                name='desc'
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Введите текст заметки'
              />
              {isValidationFailedDesc ? <div className={s.form_error_msg}>{formik.errors.desc}</div> : null}
            </div>


            <div className={s.form_elements__field}>
              <label className={s.form_elements__label} htmlFor='signature'>
                Подпись *
              </label>

              <input
                className={`${s.form_elements__input} ${isValidationFailedSignature ? s.form_input_required : ''}`}
                id='signature'
                name='signature'
                type='text'
                value={formik.values.signature}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Введите подпись'
              />
              {isValidationFailedSignature ? <div className={s.form_error_msg}>{formik.errors.signature}</div> : null}
            </div>
          </div>

          <button className={`${s.form__btn} ${isValidationFailedSignature ? s.form_button_disabled : ''}`}
                  type='submit'>
            Создать
          </button>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default FormPage;
