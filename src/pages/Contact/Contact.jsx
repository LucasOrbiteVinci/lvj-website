import emailjs from '@emailjs/browser';
import { useRef } from 'react';

//css
import styles from './Contact.module.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmailMessage',
        'template_ytdwa76',
        form.current,
        '8yfmdKJwS18LGtGpb',
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <div className={styles.body}>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.form_group}>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="user_name" />
        </div>
        <div className={styles.form_group}>
          <label for="email">Email:</label>
          <input type="email" id="email" name="user_email" />
        </div>
        <div className={styles.form_group}>
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="message" />
        </div>
        <div className={styles.form_group}>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
