import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

function PortfolioCarousel() {
  const [show, setShow] = useState([true, true]);

  // Toggle function for each card
  const toggleStaticPic = (index: number) => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };

  const portfolioItems = [
    {
      id: 1,
      staticImg: 'p1.png',
      activeImg: 'p1.gif',
      title: 'Portfolio Website',
      text: 'Portfolio website developed from scratch for myself.',
      links: [
        { url: 'https://braxtonmills.com', text: 'Demo' },
        { url: 'https://github.com/bmills20/bmills20.github.io', text: 'GitHub' }
      ],
      tags: ['Front-End', 'HTML/CSS', 'React.js', 'JavaScript']
    },
    // Add more items here
  ];

  return (
    <Swiper loop={true} keyboard={{ enabled: true }} autoplay={{ delay: 2500 }} spaceBetween={50} slidesPerView={1}>
      {portfolioItems.map((item, index) => (
        <SwiperSlide key={item.id}>
          <Card sx={{ maxWidth: 345, bgcolor: 'primary.dark', color: 'white' }}>
            {show[index] ? (
              <CardMedia component="img" image={item.staticImg} alt={item.title} />
            ) : (
              <CardMedia component="img" image={item.activeImg} alt={item.title} />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.text}
              </Typography>
            </CardContent>
            <CardActions>
              {item.links.map((link, linkIndex) => (
                <Button key={linkIndex} size="small" href={link.url} target="_blank">
                  {link.text}
                </Button>
              ))}
            </CardActions>
            <Box sx={{ p: 2 }}>
              {item.tags.map((tag, tagIndex) => (
                <Button key={tagIndex} size="small" variant="contained" disabled sx={{ m: 0.5 }}>
                  {tag}
                </Button>
              ))}
            </Box>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PortfolioCarousel;
