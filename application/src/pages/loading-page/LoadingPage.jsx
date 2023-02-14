import React from "react";
import s from './LoadingPage.module.scss';

import {Spinner} from '../../components/ui/spinner/Spinner';

const LoadingPage = () => {
  return (
    <section className={s.section}>
      <Spinner />
    </section>
  );
};

export {LoadingPage};
