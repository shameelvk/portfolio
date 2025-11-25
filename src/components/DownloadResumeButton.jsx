import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const DownloadResumeButton = () => {
  // Google Drive resume link
  const RESUME_URL = 'https://drive.google.com/file/d/1xaK7YgENqx5WpVapXXflYAHPqBwjQ5FI/view?usp=sharing';

  const handleDownload = () => {
    window.open(RESUME_URL, '_blank');
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="relative px-8 py-3 bg-transparent border border-primary/50 rounded text-white font-medium uppercase tracking-wider text-xs overflow-hidden group cursor-magnetic"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        borderColor: 'rgba(220, 20, 60, 1)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Simple border glow animation */}
      <motion.div
        className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 15px rgba(220, 20, 60, 0.5)',
        }}
      />
      
      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        animate={{
          x: ['-200%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Button Content */}
      <span className="relative flex items-center gap-2">
        <FaDownload className="text-primary" />
        Download Resume
      </span>
    </motion.button>
  );
};

export default DownloadResumeButton;
