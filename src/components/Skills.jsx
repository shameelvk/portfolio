import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/data';
import { FaReact, FaMobile, FaTools, FaPlug } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: FaReact },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'tools', label: 'Tools', icon: FaTools },
    { id: 'integrations', label: 'Integrations', icon: FaPlug },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-gray text-gray-400 hover:text-white hover:bg-dark-gray/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="text-lg" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {skillsData[activeCategory]?.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 rounded-lg group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(220, 20, 60, 0.2)',
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-medium text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <motion.span
                    className="text-primary font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-red-600 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
