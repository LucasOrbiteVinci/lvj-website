//CSS
import styles from './Footer.module.css';

//icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_icon}>
        <li className={styles.social_icon__item}>
          <a
            className={styles.social_icon__link}
            href="https://www.facebook.com/lvjpiscinas?locale=pt_BR"
            target="_blank"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className={styles.social_icon__item}>
          <a
            className={styles.social_icon__link}
            href="https://wa.me/+5511992550165"
            target="_blank"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </li>
        <li className={styles.social_icon__item}>
          <a
            className={styles.social_icon__link}
            href="https://www.instagram.com/lvjpiscinas/"
            target="_blank"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <p>
        &copy;2024 LVJ Piscinas CNPJ: 27.870.603/0001-09 | Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
