import React from 'react';
import s from './LoginForm.module.scss';
import logIn from '@/assets/images/icons/auth/login.svg';
import password from '@/assets/images/icons/auth/password.svg';
import {useFormik} from 'formik';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {HOME_ROUTE} from '@/utils/consts';
import {login} from '@/redux/reducers/user/userSlice';
import {AuthInput} from '@/components/ui/auth-input/AuthInput';
import {isEmptyObject} from '@/helpers/isEmpty';
import {validateFormLogin} from '@/helpers/validate';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {username: 'Admin123', password: 'Admin123'},
    validate: validateFormLogin,
    onSubmit: async (values, {resetForm}) => {
      await dispatch(login({username: formik.values.username, password: formik.values.password}));
      await resetForm();
      await navigate(HOME_ROUTE);
    },
  });

  const isNotValid = isEmptyObject(formik.errors);

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <AuthInput
        type='username'
        placeholder='username'
        img={logIn}
        error={formik.errors.username}
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      {isNotValid ? <div className={s.form_error_msg}>{formik.errors?.username}</div> : null}

      <AuthInput
        type='password'
        placeholder='password'
        img={password}
        error={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
      {isNotValid ? <div className={s.form_error_msg}>{formik.errors?.password}</div> : null}

      <div className={s.form_que}>
        <Link to='' className={s.form_link}>Забыли пароль?</Link>
      </div>
      <button className={s.form_button} type="submit" disabled={isNotValid}>Войти</button>
    </form>
  );
};

export {LoginForm};
