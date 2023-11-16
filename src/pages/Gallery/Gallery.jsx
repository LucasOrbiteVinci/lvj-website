import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList x={{ width: 400, height: 450 }} cols={3} rowHeight={600}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/src/images/portfolio/1.jpg',
    title: 'Piscina 1',
  },
  {
    img: '/src/images/portfolio/2.jpg',
    title: 'Piscina 2',
  },
  {
    img: '/src/images/portfolio/3.jpg',
    title: 'Piscina 3',
  },
  {
    img: '/src/images/portfolio/4.jpg',
    title: 'Piscina 4',
  },
  {
    img: '/src/images/portfolio/5.jpg',
    title: 'Piscina 5',
  },
  {
    img: '/src/images/portfolio/6.jpg',
    title: 'Piscina 6',
  },
  {
    img: '/src/images/portfolio/7.jpg',
    title: 'Piscina 7',
  },
  {
    img: '/src/images/portfolio/8.jpg',
    title: 'Piscina 8',
  },
  {
    img: '/src/images/portfolio/9.jpg',
    title: 'Piscina 9',
  },
  {
    img: '/src/images/portfolio/10.jpg',
    title: 'Piscina 10',
  },
  {
    img: '/src/images/portfolio/11.jpg',
    title: 'Piscina 11',
  },
  {
    img: '/src/images/portfolio/12.jpg',
    title: 'Piscina 12',
  },
  {
    img: '/src/images/portfolio/13.jpg',
    title: 'Piscina 13',
  },
  {
    img: '/src/images/portfolio/14.jpg',
    title: 'Piscina 14',
  },
  {
    img: '/src/images/portfolio/15.jpg',
    title: 'Piscina 15',
  },
  {
    img: '/src/images/portfolio/16.jpg',
    title: 'Piscina 16',
  },
  {
    img: '/src/images/portfolio/17.jpg',
    title: 'Piscina 17',
  },
  {
    img: '/src/images/portfolio/18.jpg',
    title: 'Piscina 18',
  },
  {
    img: '/src/images/portfolio/19.jpg',
    title: 'Piscina 19',
  },
  {
    img: '/src/images/portfolio/20.jpg',
    title: 'Piscina 20',
  },
  {
    img: '/src/images/portfolio/21.jpg',
    title: 'Piscina 21',
  },
  {
    img: '/src/images/portfolio/22.jpg',
    title: 'Piscina 22',
  },
  {
    img: '/src/images/portfolio/23.jpg',
    title: 'Piscina 23',
  },
  {
    img: '/src/images/portfolio/24.jpg',
    title: 'Piscina 24',
  },
  {
    img: '/src/images/portfolio/25.jpg',
    title: 'Piscina 25',
  },
  {
    img: '/src/images/portfolio/26.jpg',
    title: 'Piscina 26',
  },
  {
    img: '/src/images/portfolio/27.jpg',
    title: 'Piscina 27',
  },
  {
    img: '/src/images/portfolio/28.jpg',
    title: 'Piscina 28',
  },
  {
    img: '/src/images/portfolio/29.jpg',
    title: 'Piscina 29',
  },
  {
    img: '/src/images/portfolio/Filtro 1.jpg',
    title: 'Filtro 1',
  },
  {
    img: '/src/images/portfolio/Filtro 2.jpg',
    title: 'Filtro 2',
  },
  {
    img: '/src/images/portfolio/bomba 1.jpg',
    title: 'Bomba 1',
  },
  {
    img: '/src/images/portfolio/Bomba 2.jpg',
    title: 'Bomba 2',
  },
  {
    img: '/src/images/portfolio/bomba 3.jpg',
    title: 'bomba 3',
  },
];
