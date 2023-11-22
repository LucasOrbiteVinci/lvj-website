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
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaWhatsappSquare />
      </div>
      <p>Todos os direitos reservados. &copy;2023 LVJ Piscinas</p>
    </footer>
  );
};

export default Footer;
