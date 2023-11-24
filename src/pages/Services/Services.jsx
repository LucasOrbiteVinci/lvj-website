import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//css
import styles from './Services.module.css';

//icons
import { PiEngineFill, PiSwimmingPoolBold } from 'react-icons/pi';
import { FaSwimmer, FaFaucet, FaSwimmingPool, FaHotel } from 'react-icons/fa';
import { GiPowderBag } from 'react-icons/gi';
import { MdElectricBolt } from 'react-icons/md';

const Services = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Serviços:</h1>
      <div className={styles.infos}>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/6.jpg"
                alt="limpeza-de-piscina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <PiSwimmingPoolBold />
                  <p>
                    Limpeza e Manutenção de Piscinas. (Condomínios e
                    Residencias.)
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/30.jpg"
                alt="limpeza-de-piscina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <FaSwimmer />
                  <p>
                    Diárias, Planos Semanais, Mensais, Contrato Anual e Visitas
                    de Emergência.
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/19.jpg"
                alt="filtro-de-piscina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <FaSwimmingPool />
                  <p>Limpeza de Piscina Pós Obras, para Construtoras.</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/18.jpg"
                alt="piscina-foto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <FaHotel />
                  <p>Atendemos Hoteis, Moteis, Pousadas, Chácaras e Sítios.</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/Filtro 2.jpg"
                alt="filtro-de-piscina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <GiPowderBag />
                  <p>Troca de Areia do filtro da Piscina.</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/Bomba 2.jpg"
                alt="bomba-de-piscina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <PiEngineFill />
                  <p>Conserto e Manutenção de Bombas.</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/Filtro 1.jpg"
                alt="filtro-de-piscina"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <FaFaucet />
                  <p>Hidraulica: Reparos de Registros e Casa de Maquinas.</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.infosItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/src/images/portfolio/timer.jpg"
                alt="timer"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <MdElectricBolt />
                  <p>Eletrica: Instalação e Configuração de Timers, Leds.</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
