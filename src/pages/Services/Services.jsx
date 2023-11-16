import React from 'react';

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
      <h1>Serviços</h1>

      <div className={styles.infos}>
        <PiSwimmingPoolBold />
        <p>Limpeza e Manutenção de Piscinas.</p>
        <FaSwimmer />
        <p>Serviços</p>
        <GiPowderBag />
        <p>Troca de Areia</p>
        <PiEngineFill />
        <p>Conserto de Bombas</p>
        <FaFaucet />
        <p>Hidraulica</p>
        <MdElectricBolt />
        <p>Eletrica</p>
      </div>
    </div>
  );
};

export default Services;
