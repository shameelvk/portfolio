import { motion } from 'framer-motion';
import { educationData, awardsData } from '../data/data';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Awards
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/20 p-3 rounded-lg">
                <FaGraduationCap className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Education
              </h3>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass-card rounded-xl overflow-hidden cursor-magnetic group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 15px 35px rgba(220, 20, 60, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      {/* Left side - Education details */}
                      <div className="flex-1">
                        <motion.h4
                          className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {edu.degree}
                        </motion.h4>
                        <p className="text-primary font-semibold text-lg mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {edu.location}
                        </p>
                      </div>
                      
                      {/* Right side - Duration and Grade */}
                      <div className="lg:text-right space-y-2">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                          <span className="text-gray-300 text-sm">{edu.duration}</span>
                        </div>
                        <div className="text-2xl font-bold gradient-text">
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative bottom border */}
                  <div className="h-1 bg-gradient-to-r from-primary via-red-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Awards Section */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/20 p-3 rounded-lg">
                <FaTrophy className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Awards & Recognition
              </h3>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {awardsData.map((award, index) => (
                <motion.div
                  key={award.id}
                  variants={itemVariants}
                  className="glass-card rounded-xl p-6 cursor-magnetic group relative overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 15px 35px rgba(220, 20, 60, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      className="bg-primary/20 p-4 rounded-lg flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaTrophy className="text-3xl text-primary" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h4
                        className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {award.title}
                      </motion.h4>
                      <p className="text-primary text-sm font-semibold mb-2">
                        {award.organization}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
