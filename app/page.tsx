'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Fade,
  Typography,
} from '@mui/material';
import { Roll } from 'react-awesome-reveal';
import { isMobile } from 'react-device-detect';
import Contact from './_components/Contact';
import PortfolioCarousel from './_components/PortfolioCarousel';
import PortfolioFade from './_components/PortfolioFade';
import Particles from '@tsparticles/react';
import { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import SkillCard from './_components/SkillCard';
import { Link, Element } from 'react-scroll';

const Page = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const frontEnd = useRef(null);
  const backEnd = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0.25 && latest < 0.5) {
        setActiveSection('frontEnd');
      } else if (latest > 0.5 && latest < 0.75) {
        setActiveSection('backEnd');
      } else if (latest > 0.75) {
        setActiveSection('portfolio');
      } else {
        setActiveSection('');
      }
    });
  }, [scrollYProgress]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Particles
          id='tsparticles'
          particlesLoaded={() => Promise.resolve()}
          options={{
            background: {
              color: {
                value: '#0d47a1',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className='headerText' id='headerText'>
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <Typography variant='h4'>
              Hello there, my name is Braxton Mills.
            </Typography>
          </motion.div>
          <Fade in={true} style={{ transitionDelay: '1500ms' }}>
            <Typography variant='h6'>
              I am a software engineer with back-end and front-end knowledge.
            </Typography>
          </Fade>
          <Fade in={true} style={{ transitionDelay: '2500ms' }}>
            <Typography variant='h6'>
              Scroll down to view my skills and work.
            </Typography>
          </Fade>
        </div>
      </header>
      <AppBar position='sticky'>
        <Toolbar>
          <Link to='frontend'>
            <Button
              color={activeSection === 'frontEnd' ? 'primary' : 'inherit'}
            >
              Front-End
            </Button>
          </Link>
          <Link to='backEnd' smooth={true}>
            <Button color={activeSection === 'backEnd' ? 'primary' : 'inherit'}>
              Back-End
            </Button>
          </Link>
          <Link to='portfolio' smooth={true}>
            <Button
              color={activeSection === 'portfolio' ? 'primary' : 'inherit'}
            >
              Portfolio
            </Button>
          </Link>
          <Link to='contact' smooth={true}>
            <Button color={activeSection === 'contact' ? 'primary' : 'inherit'}>
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <section id='frontEnd' className='section'>
        Front-End
      </section>
      <section id='backEnd' className='section'>
        Back-End
      </section>
      <section id='portfolio' className='section'>
        Portfolio
      </section>
      <section id='contact' className='section'>
        Contact
      </section>
      <Container className='frontEnd' id='frontEnd' ref={frontEnd}>
        <div className='catTitle'>
          <Typography variant='h4'>Front-End Skills:</Typography>
        </div>
        <br />
        <div className='skillFlex'>
          <SkillCard skill='HTML' delay={0} />
          <SkillCard skill='CSS' delay={0.5} />
          <SkillCard skill='JavaScript' delay={1} />
          <SkillCard skill='Bootstrap' delay={1.5} />
          <SkillCard skill='jQuery' delay={2} />
          <SkillCard skill='React' delay={2.5} />
        </div>
      </Container>
      <Container className='frontEnd' id='backEnd' ref={backEnd}>
        <div className='catTitle'>
          <Typography variant='h4'>Back-End Skills:</Typography>
        </div>
        <br />
        <SkillCard skill='Python' delay={0} />
        <SkillCard skill='Java' delay={500} />
        <SkillCard skill='PHP' delay={1000} />
        <SkillCard skill='SQL' delay={1500} />
        <SkillCard skill='Node.js' delay={2000} />
        <SkillCard skill='MongoDB' delay={2500} />
      </Container>
      <Container className='frontEnd' id='portfolio' ref={portfolio}>
        <Typography variant='h4' className='portfolioHeader'>
          Portfolio:
        </Typography>
        <div className='portfolioRow' />
        {isMobile ? <PortfolioCarousel /> : <PortfolioFade />}
      </Container>
      <div ref={contact}>
      <Contact />
      </div>
    </div>
  );
};
export default Page;
