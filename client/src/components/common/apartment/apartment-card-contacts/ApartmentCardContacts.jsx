import React from 'react';
import s from './ApartmentCardContacts.module.scss';
import avatar from '@/assets/images/icons/apartOwn/image.svg';
import phone from '@/assets/images/icons/apartOwn/phone.svg';
import wa from '@/assets/images/icons/apartOwn/wa.svg';
import mail from '@/assets/images/icons/apartOwn/mail.svg';

const ApartmentCardContacts = ({active}) => {
  return (
    <div className={`${s.card} ${active && s.card_active}`} onClick={(e) => e.stopPropagation}>
      <img src={avatar} alt="фото" className={s.card__image} />
      <p className={s.card__own}>Владелец</p>
      <p className={`${s.card__contacts} ${s.card__contacts_mt}`}>Ivan</p>
      <p className={`${s.card__contacts} ${s.card__contacts_mb}`}>+7999999999</p>
      <p className={s.card__mail}>email@mail.com</p>
      <ul className={s.card__networks}>
        <li className={s.card__item}>
          <img src={phone} alt="иконка" />
        </li>
        <li className={s.card__item}>
          <img src={wa} alt="иконка" />
        </li>
        <li className={s.card__item}>
          <img src={mail} alt="иконка" />
        </li>
      </ul>

    </div>
  );
};


export {ApartmentCardContacts};
