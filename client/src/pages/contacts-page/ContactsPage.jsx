import React from 'react';
import {Header} from '@/components/header/Header';
import {Footer} from '@/components/footer/Footer';
import {ContactsSection} from '@/components/main/contacts/contacts-section/ContactsSection';

const ContactsPage = () => {
  return (
    <>
      <Header />
      <ContactsSection />
      <Footer />
    </>
  );
};

export default ContactsPage;
