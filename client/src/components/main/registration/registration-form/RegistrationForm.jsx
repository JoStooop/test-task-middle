import React from 'react';
import s from './RegistrationForm.module.scss';
import loginImg from '@/assets/images/icons/auth/login.svg';
import emailImg from '@/assets/images/icons/auth/mail.svg';
import passwordImg from '@/assets/images/icons/auth/password.svg';
import {useFormik} from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import {useNavigate} from 'react-router-dom';
import {validateFormRegistration} from '@/helpers/validate';
import {HOME_ROUTE} from '@/utils/consts';
import {isEmptyObject} from '@/helpers/isEmpty';
import {AuthInput} from '@/components/ui/auth-input/AuthInput';
import {useDispatch} from 'react-redux';
import {logUp} from '@/redux/reducers/user/userSlice';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validate: validateFormRegistration,
    onSubmit: async (values, {resetForm}) => {
      await dispatch(logUp({
        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password,
      }));
      await resetForm();
      await navigate(HOME_ROUTE);
    },
  });

  const isNotValid = isEmptyObject(formik.errors);
  console.log(formik.errors);

  return (
    <form className={s.wrap} onSubmit={formik.handleSubmit}>
      <AuthInput
        type='username'
        placeholder='Логин'
        img={loginImg}
        error={formik.errors.username}
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      {isNotValid ? <div className={s.error_msg}>{formik.errors?.username}</div> : null}

      <AuthInput
        type='email'
        placeholder='Электронная почта'
        img={emailImg}
        error={formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      {isNotValid ? <div className={s.error_msg}>{formik.errors?.email}</div> : null}

      <AuthInput
        type='password'
        placeholder='Пароль'
        img={passwordImg}
        error={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      {isNotValid ? <div className={s.error_msg}>{formik.errors?.password}</div> : null}

      <AuthInput
        type='repeatPassword'
        placeholder='Повторите пароль'
        img={passwordImg}
        error={formik.errors.repeatPassword}
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      {isNotValid ? <div className={s.error_msg}>{formik.errors?.repeatPassword}</div> : null}

      <ReCAPTCHA sitekey='SflKxwRJSMeKKF'/>

      <button className={s.button} type="submit" disabled={isNotValid}>Зарегистрироваться</button>
    </form>
  );
};

export {RegistrationForm};
