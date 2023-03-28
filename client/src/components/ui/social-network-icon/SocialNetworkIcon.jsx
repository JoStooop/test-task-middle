import React from 'react';
import s from './SocialNetworkIcon.module.scss';

const SocialNetworkIcon = (props) => {
  const {img, size} = props;

  return (
    <li className={s.network} >
      <img className={s.img} src={img} alt="иконка" style={{width: size, height: size}}/>
    </li>
  );
};

export {SocialNetworkIcon};
