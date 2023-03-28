import React from 'react';
import s from './ApartmentsShareNetworks.module.scss';
import vk from '@/assets/images/icons/share/vk.svg';
import fb from '@/assets/images/icons/share/fb.svg';
import phone from '@/assets/images/icons/share/phone.svg';
import tg from '@/assets/images/icons/share/tg.svg';
import {SocialNetworkIcon} from '@/components/ui/social-network-icon/SocialNetworkIcon';

const ApartmentsShareNetworks = () =>{
  return (
    <div className={s.wrap}>
      <p className={s.title}>Поделиться</p>
      <ul className={s.list}>
        <SocialNetworkIcon img={vk} size='37px'/>
        <SocialNetworkIcon img={fb} size='37px'/>
        <SocialNetworkIcon img={phone} size='37px'/>
        <SocialNetworkIcon img={tg} size='37px'/>
      </ul>
    </div>
  );
};

export {ApartmentsShareNetworks};
