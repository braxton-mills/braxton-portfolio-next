import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tools: string;
}

const projects: Project[] = [
  {
    title:
      'Real Estate Document Querying with Vector Search and RAG Implementation',
    description:
      'Developed an AI-powered client dashboard for real estate agents, integrating advanced AI features including natural language processing for querying documents.',
    tools:
      'LangChain, MongoDB Atlas, Azure AI Studio, Azure OpenAI, Python, Streamlit',
  },
  {
    title:
      'Chat Solution Enhancement with Natural Language Understanding (NLU)',
    description:
      "Led a project to enhance Salesforce's Embedded Service Chat with Botpress NLU, significantly improving chat efficiency and increasing problem resolution rate from 5% to 49%.",
    tools: 'Salesforce, Botpress, TypeScript',
  },
];

const Projects: React.FC = () => {
  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl font-bold mb-8 text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <p className='text-gray-600'>Tools: {project.tools}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
