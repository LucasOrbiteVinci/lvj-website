import { NavLink } from 'react-router-dom';

//CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        LVJ <span>Piscinas</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/services">Serviços</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contato</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Galeria</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
