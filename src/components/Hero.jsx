import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Mohammed Shameel', 'Developer'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/shameelvk', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com/shameel__vk', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/shamee.l__', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohammed-shameel-vk-848816265', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="home" className="relative h-screen flex items-center justify-center bg-dark overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase"
          >
            I'm <span className="gradient-text">{text}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base tracking-[3px] uppercase font-medium mb-8 text-gray-300"
          >
            Software Developer
          </motion.p>

          {/* Social Links */}
          <motion.ul variants={itemVariants} className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.li
                key={social.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl inline-block cursor-magnetic"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.2, 
                    color: '#dc143c',
                    filter: 'drop-shadow(0 0 8px rgba(220, 20, 60, 0.6))',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <social.icon />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-magnetic"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
