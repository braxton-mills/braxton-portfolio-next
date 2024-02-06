import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Typography, Link, Box } from '@mui/material';

function PortfolioFade() {
  const [show, setShow] = useState([true, true, true, true]); // Example for four items

  const toggleStaticPic = (index) => {
    const updatedShow = [...show];
    updatedShow[index] = !updatedShow[index];
    setShow(updatedShow);
  };

  const portfolioItems = [
    {
      id: 'p1',
      staticImg: 'p1.png',
      activeImg: 'p1.gif',
      title: 'Portfolio Website',
      description: 'Portfolio website developed from scratch for myself.',
      links: [
        { href: 'https://braxtonmills.com', text: 'Demo' },
        { href: 'https://github.com/bmills20/bmills20.github.io', text: 'GitHub' }
      ],
      // Animation delay in seconds
      delay: 0,
    },
    // Add more items here
  ];

  // Define the animation variants
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <Box>
      {portfolioItems.map((item, index) => (
        <motion.div
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          key={item.id}
        >
          <Card sx={{ maxWidth: 345, bgcolor: 'primary.dark', color: 'white', mb: 2 }}>
            <CardMedia
              component="img"
              image={show[index] ? item.staticImg : item.activeImg}
              alt={item.title}
              onMouseEnter={() => toggleStaticPic(index)}
              onMouseLeave={() => toggleStaticPic(index)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              {item.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.href} underline="hover" target="_blank" rel="noopener" sx={{ display: 'block' }}>
                  {link.text}
                </Link>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
}

export default PortfolioFade;
