import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//CSS
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.body}>
      {
        <div className={styles.card}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Card item sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="330"
                  image="/src/images/LVJ Logo.svg"
                  alt="lvj-piscinas-logo"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Sobre a empresa:
                  </Typography>
                  <br />
                  <Typography variant="body1" color="text.secondary">
                    <div className={styles.text}>
                      A LVJ Piscinas surgiu da necessidade do mercado de
                      encontrar uma empresa que juntasse todas as linhas de
                      atuação no ramo da Limpeza e Manutenção em Piscinas, como
                      Elétrica, Hidráulica , Manutenção dos Filtros, Ajustes de
                      Parâmetros além é claro da limpeza em si, Aspiração,
                      Escovação e Peneiração, tudo isso com conhecimento técnico
                      e profissionais capacitados para prestar um serviço de
                      forma ampla e precisa. Desde 2016 vem atuando nos mais
                      diversos segmentos, como por exemplo : Condomínios,
                      Residências , Obras, Escolas, Hotéis, Motéis e Academias.
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </div>
      }
    </div>
  );
};

export default About;
