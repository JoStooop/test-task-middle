import React from 'react';
import s from './Footer.module.scss';
import {FooterAddress} from '@/components/footer/footer-address/FooterAddress';
import {FooterAdsList} from '@/components/footer/footer-ads-list/FooterAdsList';
const Footer = () => {
  return (
    <footer className={s.wrap}>
      <FooterAddress />
      <FooterAdsList />
    </footer>
  );
};

export {Footer};
