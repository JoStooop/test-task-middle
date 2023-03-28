import React from 'react';
import s from './MainHeader.module.scss';
import {NavLink} from 'react-router-dom';
import {UserProfile} from '@/components/common/user-profile/UserProfile';
import {CONTACTS_ROUTE, FAVORITES_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_ROUTE} from '@/utils/consts';
import {useSelector} from 'react-redux';
import {getAuthUser, getUser} from '@/redux/reducers/user/userSelector';
// import {useSelector} from 'react-redux';

const MainHeader = () => {
  const isAuth = useSelector(getAuthUser);
  const {username} = useSelector(getUser);

  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.menu}>
          <ul>
            <li>
              <NavLink to={HOME_ROUTE}
                className={({isActive}) => (isActive ? `${s.link} ${s.link_active}` : s.link)}>
                Главная</NavLink>
            </li>
            <li>
              <NavLink to={NEWS_ROUTE}
                className={({isActive}) => (isActive ? `${s.link} ${s.link_active}` : s.link)}>
                Новости</NavLink>
            </li>
            <li>
              <NavLink to="/rates"
                className={({isActive}) => (isActive ? `${s.link} ${s.link_active}` : s.link)}>
                Размещение и тарифы</NavLink>
            </li>
            <li>
              <NavLink to="/map"
                className={({isActive}) => (isActive ? `${s.link} ${s.link_active} ${s.link_before}` : `${s.link} ${s.link_before}`)}>
                Объявления на карте</NavLink>
            </li>
            <li>
              <NavLink to={CONTACTS_ROUTE}
                className={({isActive}) => (isActive ? `${s.link} ${s.link_active}` : s.link)}>
                Контакты</NavLink>
            </li>
            <li>
              <NavLink to={FAVORITES_ROUTE}
                className={({isActive}) => (isActive ? `${s.link} ${s.link_active} ${s.link_after}` : `${s.link} ${s.link_after}`)}>
                Закладки
              </NavLink>
            </li>
          </ul>
        </li>
        {!isAuth && <li>
          <NavLink to={LOGIN_ROUTE} className={`${s.link} ${s.link_purple}`}>Вход и регистрация</NavLink>
        </li>}
        {isAuth && <UserProfile username={username ?? 'Новый пользователь'}/>}
      </ul>
    </nav>
  );
};

export {MainHeader};
