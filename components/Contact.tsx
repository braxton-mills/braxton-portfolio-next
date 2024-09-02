import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl font-bold mb-8 text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className='max-w-md mx-auto'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              placeholder='Name'
              className='w-full px-4 py-2 rounded-md'
              required
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full px-4 py-2 rounded-md'
              required
            />
            <textarea
              placeholder='Message'
              rows={4}
              className='w-full px-4 py-2 rounded-md'
              required
            ></textarea>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
