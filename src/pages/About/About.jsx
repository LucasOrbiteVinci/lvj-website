import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//CSS
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.body}>
      {
        <div className={styles.card}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/src/images/LVJ Logo.svg"
                alt="lvj-piscinas-logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sobre a empresa:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  A LVJ Piscinas surgiu da necessidade do mercado de encontrar
                  uma empresa que juntasse todas as linhas de atuação no ramo da
                  Limpeza e Manutenção em Piscinas, como Elétrica, Hidráulica ,
                  Manutenção dos Filtros, Ajustes de Parâmetros além é claro da
                  limpeza em si, Aspiração, Escovação e Peneiração, tudo isso
                  com conhecimento técnico e profissionais capacitados para
                  prestar um serviço de forma ampla e precisa. Desde 2016 vem
                  atuando nos mais diversos segmentos, como por exemplo :
                  Condomínios, Residências , Obras, Escolas, Hotéis, Motéis e
                  Academias.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      }
    </div>
  );
};

export default About;
