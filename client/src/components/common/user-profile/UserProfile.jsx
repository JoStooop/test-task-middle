import React, {useState} from 'react';
import s from './UserProfile.module.scss';
import user from '@/assets/images/icons/auth/user.svg';
import {useDispatch} from 'react-redux';
import {logout} from '@/redux/reducers/user/userSlice';

const UserProfile = (props) => {
  const {username} = props;

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={s.wrap}>
      <img src={user} alt="фото" className={s.photo} />
      <span className={s.name}>{username}</span>
      <button className={s.button} onClick={()=> setIsActive(!isActive)}></button>
      <div className={`${s.dropdown} ${isActive && s.dropdown_active}`} id="myDropdown">
        <button className={s.dropdown_link} onClick={logoutHandler}>Выйти</button>
      </div>
    </div>
  );
};

export {UserProfile};
