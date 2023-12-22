//CSS
import styles from './Home.module.css';

//icons

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <ul className={styles.iconsList}>
          <li>
            <img
              className={styles.lvj_market}
              src="/src/images/HomeSVGs/lvj-mercado.svg"
              alt="LVJ-Anos-no-Mercado"
            />
            <p>9 anos no mercado</p>
          </li>
          <li className={styles.lvj_prof}>
            <img
              src="/src/images/HomeSVGs/lvj-professionais.svg"
              alt="lvj-professionals"
            />
            <p>Técnicos treinados e experientes</p>
          </li>
          <li className={styles.lvj_services}>
            <img
              src="/src/images/HomeSVGs/lvj-personalizado.svg"
              alt="lvj-servicos-personalizados"
            />
            <p>Serviços Personalizados</p>
          </li>
          <li className={styles.lvj_diving}>
            <img
              src="/src/images/HomeSVGs/lvj-trabalhos-submersos.svg"
              alt="lvj-trabalhos-submersos"
            />
            <p>Trabalhos Submersos</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
