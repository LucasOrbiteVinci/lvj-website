import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//CSS
import styles from './Home.module.css';

//icons
import MercadoIcon from '../../assets/icons/MercadoIcon';

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.iconsList}></div>
      </div>
    </div>
  );
};

export default Home;
