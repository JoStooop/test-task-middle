import React from 'react';
import s from './FooterNetworks.module.scss';
import ig from '@/assets/images/icons/black/ig.svg';
import vk from '@/assets/images/icons/black/vk.svg';
import fb from '@/assets/images/icons/black/fb.svg';
import {SocialNetworkIcon} from '@/components/ui/social-network-icon/SocialNetworkIcon';

const FooterNetworks = () => {
  return (
    <div className={s.networks}>
      <p className={s.networks_title}>Мы в соцсетях</p>
      <ul className={s.networks_list}>
        <SocialNetworkIcon img={ig} size='32px'/>
        <SocialNetworkIcon img={vk} size='32px'/>
        <SocialNetworkIcon img={fb} size='32px'/>
      </ul>
    </div>
  );
};

export {FooterNetworks};
