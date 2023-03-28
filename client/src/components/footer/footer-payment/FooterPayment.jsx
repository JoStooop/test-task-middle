import React from 'react';
import s from './FooterPayment.module.scss';
import visa from '@/assets/images/icons/payment/visa.svg';
import webpay from '@/assets/images/icons/payment/webpay.svg';
import verified from '@/assets/images/icons/payment/verified.svg';
import mastercard from '@/assets/images/icons/payment/mastercard.svg';
import securecode from '@/assets/images/icons/payment/securecode.svg';
import belcard from '@/assets/images/icons/payment/belcard.svg';
import {PaymentIcon} from '@/components/ui/payment-icon/PaymentIcon';

const FooterPayment = () => {
  return (
    <ul className={s.payment}>
      <PaymentIcon img={visa} />
      <PaymentIcon img={webpay} />
      <PaymentIcon img={verified} />
      <PaymentIcon img={mastercard} />
      <PaymentIcon img={securecode} />
      <PaymentIcon img={belcard} />
    </ul>
  );
};

export {FooterPayment};
