import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl font-bold mb-8 text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className='text-lg text-center max-w-2xl mx-auto'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {`I'm a passionate full-stack developer with a strong background in
          AI-powered solutions and cloud technologies. With experience in
          leading software engineering projects and implementing cutting-edge
          technologies, I specialize in creating efficient, scalable, and
          user-friendly applications. My expertise spans from front-end
          development with Next.js and React to back-end solutions using Node.js
          and Python, all while leveraging cloud platforms like Azure and GCP.`}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
