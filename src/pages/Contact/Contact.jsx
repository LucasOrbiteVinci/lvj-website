import React from 'react';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.body}>
      <h1>Contato</h1>

      <img
        src="/src/images/icons-whatsapp.svg"
        alt="contato-whatsapp"
        href="#"
        target="_blank"
      />
      <img
        src="/src/images/icons-gmail.svg"
        alt="contato-gmail"
        href="#"
        target="_blank"
      />
      <img
        src="/src/images/icons-instagram.svg"
        alt="contato-instagram"
        href="#"
        target="_blank"
      />
      <img
        src="/src/images/icons-facebook.svg"
        alt="contato-facebook"
        href="#"
        target="_blank"
      />
    </div>
  );
};

export default Contact;
