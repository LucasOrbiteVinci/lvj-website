import { NavLink } from 'react-router-dom';

//CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <img src="/src/images/LVJ-Logo-Navbar.png" alt="LVJ-Logo" />{' '}
      </NavLink>

      <ul className={styles.links_list}>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/about">
          <li>Sobre</li>
        </NavLink>

        <NavLink to="/services">
          <li>Serviços</li>
        </NavLink>

        <NavLink to="/contact">
          <li>Contato</li>
        </NavLink>

        <NavLink to="/gallery">
          <li>Galeria</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
