import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'Node.js',
  'Azure',
  'GCP',
  'MongoDB',
  'SQL',
  'Docker',
  'Git',
  'Agile',
];

const Skills: React.FC = () => {
  return (
    <section id='skills' className='py-20 bg-gray-200'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl font-bold mb-8 text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className='bg-white rounded-lg shadow-md p-4 text-center'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
