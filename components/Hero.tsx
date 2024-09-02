import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white'
    >
      <motion.div
        className='text-center'
        initial='hidden'
        animate='visible'
        variants={fadeIn}
      >
        <h1 className='text-5xl font-bold mb-4'>Braxton Mills</h1>
        <h2 className='text-3xl mb-6'>Full Stack Developer</h2>
        <Link
          to='about'
          smooth={true}
          duration={500}
          className='bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors cursor-pointer'
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
