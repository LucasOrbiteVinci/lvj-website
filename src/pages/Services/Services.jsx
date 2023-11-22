//css
import styles from './Services.module.css';

//icons
import { PiEngineFill, PiSwimmingPoolBold } from 'react-icons/pi';
import { FaSwimmer, FaFaucet } from 'react-icons/fa';
import { GiPowderBag } from 'react-icons/gi';
import { MdElectricBolt } from 'react-icons/md';

const Services = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Serviços:</h1>
      <div className={styles.infos}>
        <div className={styles.infosItem}>
          <PiSwimmingPoolBold />
          <p>Limpeza e Manutenção de Piscinas.</p>
        </div>
        <div className={styles.infosItem}>
          <FaSwimmer />
          <p>Serviços</p>
        </div>
        <div className={styles.infosItem}>
          <GiPowderBag />
          <p>Troca de Areia</p>
        </div>
        <div className={styles.infosItem}>
          <PiEngineFill />
          <p>Conserto de Bombas</p>
        </div>
        <div className={styles.infosItem}>
          <FaFaucet />
          <p>Hidraulica</p>
        </div>
        <div className={styles.infosItem}>
          <MdElectricBolt />
          <p>Eletrica</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
