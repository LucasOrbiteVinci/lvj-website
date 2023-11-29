//CSS
import styles from './Footer.module.css';

//icons
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Acompanhe nosso trabalho:</h3>
      <div className={styles.icons}>
        <div className={styles.facebook}>
          <a
            href="https://www.facebook.com/lvjpiscinas?locale=pt_BR"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
        </div>
        <div className={styles.instagram}>
          <a href="https://www.instagram.com/lvjpiscinas/" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
        <div className={styles.whatsapp}>
          <a href="#" target="_blank">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
      <p>
        Todos os direitos reservados. &copy;2023 LVJ Piscinas CNPJ:
        XX.XXX.XXX/XXXX-XX.
      </p>
    </footer>
  );
};

export default Footer;
