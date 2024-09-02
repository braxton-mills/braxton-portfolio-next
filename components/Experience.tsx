import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Lead Software Engineer',
    company: 'Atlas Agent (remote)',
    period: 'June 2023 – August 2024',
    responsibilities: [
      'Engineered an AI-powered dashboard for real estate agents with an integrated RAG-based chat interface.',
      'Led CI/CD pipeline implementation for automated build, testing, and deployment processes.',
      'Implemented RAG-based chat interface with vector search using GPT-4 and OpenAI embeddings.',
      'Architected a comprehensive monorepo codebase structure for improved code reusability and consistency.',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'Windstream (remote)',
    period: 'June 2021 – February 2024',
    responsibilities: [
      'Orchestrated integration of chatbots into the Salesforce ecosystem.',
      'Engineered AI-based solutions for 100,000 monthly customer conversations.',
      'Collaborated bi-weekly to solve chatbot-related issues, increasing problem resolution rate by 43%.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id='experience' className='py-20 bg-gray-200'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl font-bold mb-8 text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-lg shadow-md p-6'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className='text-xl font-semibold mb-2'>{exp.title}</h3>
              <p className='text-gray-600 mb-2'>
                {exp.company} | {exp.period}
              </p>
              <ul className='list-disc list-inside space-y-2'>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
