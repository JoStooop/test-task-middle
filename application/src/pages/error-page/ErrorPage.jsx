import {Link} from 'react-router-dom';
import s from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.wrap__container}>
      <h2 className={s.wrap__title}>
        Oops! This page does not exist!
      </h2>
      <Link to='/' className={s.wrap__link}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorPage;
