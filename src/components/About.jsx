import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import DownloadResumeButton from "./DownloadResumeButton";

const About = () => {
  const imageRef = useRef(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Magnetic effect within 200px radius
    if (distance < 200) {
      mouseX.set(distanceX * 0.15);
      mouseY.set(distanceY * 0.15);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const skills = [
    "React Native",
    "Next.js",
    "React.js",
    "Framer Motion",
    "Tailwind CSS",
    "Redux",
    "Firebase",
    "Expo",
  ];

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
    <section
      id="about"
      className="section-padding bg-dark relative"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading - Shows first on all devices */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-playfair mb-8 lg:hidden"
          >
            I'm Mohammed Shameel Vk...
          </motion.h2>

          {/* Grid for Image and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div variants={itemVariants} className="order-1 lg:order-1">
              <motion.div
                ref={imageRef}
                className="relative glass-card p-8 rounded-lg"
                style={{ x, y }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src="/assets/img/profile.jpg"
                  alt="Mohammed Shameel VK"
                  className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                  whileHover={{
                    scale: 1.02,
                    filter: "brightness(1.1)",
                    boxShadow: "0 0 30px rgba(220, 20, 60, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="order-2 lg:order-2">
              {/* Heading - Shows on desktop only */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-playfair mb-6 hidden lg:block"
              >
                I'm Mohammed Shameel Vk...
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 leading-relaxed mb-6"
              >
                I'm a Front End and Mobile App Developer with a Bachelor of
                Science degree in Computer Science from the University of
                Calicut. With{" "}
                <span className="gradient-text font-semibold">
                  2.6 years of professional experience
                </span>
                , I specialize in building responsive and user-friendly web and
                mobile applications.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 leading-relaxed mb-6"
              >
                My expertise lies in{" "}
                <span className="gradient-text font-semibold">
                  React Native, Next.js, and React.js
                </span>
                , where I've successfully delivered high-quality applications.
                I'm proficient in integrating REST APIs, implementing state
                management solutions, and creating seamless user experiences.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 leading-relaxed mb-8"
              >
                I have a proven ability to collaborate in Agile teams and
                contribute to fast development cycles. As a quick learner
                focused on performance, clean code, and improving user
                experience, I'm always seeking opportunities to grow and add
                value to software development teams.
              </motion.p>

              {/* Skill Badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 mb-8"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 glass text-primary font-medium text-sm rounded-full border border-primary/30 cursor-magnetic"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(220, 20, 60, 0.4)",
                      borderColor: "rgba(220, 20, 60, 0.8)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Download Resume Button */}
              <motion.div variants={itemVariants}>
                <DownloadResumeButton />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
