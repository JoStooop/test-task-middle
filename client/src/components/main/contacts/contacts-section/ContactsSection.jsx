import React, {useState} from 'react';
import s from './ContactsSection.module.scss';
import {Link} from 'react-router-dom';
import mobile from '@/assets/images/icons/contacts/mobile.svg';
import wa from '@/assets/images/icons/contacts/wa.svg';
import tg from '@/assets/images/icons/contacts/tg.svg';
import ig from '@/assets/images/icons/contacts/ig.svg';
import vk from '@/assets/images/icons/contacts/vk.svg';
import fb from '@/assets/images/icons/contacts/fb.svg';

import {PopupFeedback} from '@/components/ui/popup-feedback/PopupFeedback';
import {ContactsForm} from '@/components/main/contacts/contacts-form/ContactsForm';
import {SocialNetworkIcon} from '@/components/ui/social-network-icon/SocialNetworkIcon';

const ContactsSection = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={s.section}>
      <div className={s.row}>
        <div className={s.desc}>
          <h1 className={s.title}>Контакты</h1>
          <p className={s.text}>
            Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать
            Ваше мнение.
          </p>
          <span className={s.geo}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
          <div className={s.connect}>
            <Link to={`tel:${process.env.REACT_APP_PHONE}`} className={s.phone}>{process.env.REACT_APP_PHONE}</Link>
            <ul className={s.connect_list}>
              <SocialNetworkIcon img={wa} size='35px'/>
              <SocialNetworkIcon img={tg} size='35px'/>
              <SocialNetworkIcon img={mobile} size='35px'/>
            </ul>
          </div>
          <p className={s.mail}>sdaem@sdaem.by</p>
          <p className={s.schedule}> Режим работы: 08:00-22:00</p>
          <p className={s.address}>ИП Шушкевич Андрей Викторович</p>
          <p className={s.address}>УНП 192602485 Минским горисполкомом 10.02.2016</p>
          <p className={s.info}>Администрация сайта не владеет информацией
            о наличии свободных квартир</p>
        </div>
        <div className={s.form}>
          <ContactsForm setActive={setActive}/>
        </div>
        <div className={s.network}>
          <ul className={s.network_list}>
            <SocialNetworkIcon img={ig} size='50px'/>
            <SocialNetworkIcon img={vk} size='50px'/>
            <SocialNetworkIcon img={fb} size='50px'/>
          </ul>
        </div>
      </div>
      <PopupFeedback active={active} setActive={setActive}/>
    </section>
  );
};

export {ContactsSection};
