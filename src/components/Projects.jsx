import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projectsData, categories } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaPlus } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-dark rounded-lg overflow-hidden cursor-magnetic preserve-3d"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(220, 20, 60, 0.3)',
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          onError={(e) => {
            e.target.src = '/assets/img/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <motion.span
              key={idx}
              className="px-2 py-1 bg-dark-gray text-primary text-xs rounded border border-primary/30"
              whileHover={{ scale: 1.1, borderColor: 'rgba(220, 20, 60, 0.8)' }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-dark-gray text-gray-400 text-xs rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> Code
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = projectsData.filter(project =>
    activeFilter === 'all' ? true : project.category.includes(activeFilter)
  );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="section-padding bg-dark-gray">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setVisibleProjects(6);
              }}
              className={`px-6 py-2 rounded-full font-semibold text-sm uppercase transition-all duration-300 cursor-magnetic ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark text-light-gray hover:text-white hover:bg-dark/80'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleLoadMore}
              className="btn-primary inline-flex items-center gap-2 cursor-magnetic"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 20, 60, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus /> Load More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
