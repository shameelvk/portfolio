import { motion } from "framer-motion";
import { servicesData } from "../data/data";
import { FaMobileAlt, FaLaptopCode, FaServer } from "react-icons/fa";

const iconMap = {
  FaMobileAlt: FaMobileAlt,
  FaLaptopCode: FaLaptopCode,
  FaServer: FaServer,
};

const Services = () => {
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
      id="services"
      className="section-padding bg-dark-gray relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <motion.h2
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="glass-card rounded-xl p-8 cursor-magnetic group relative overflow-hidden flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(220, 20, 60, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="bg-primary/20 p-5 rounded-full mb-6 z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {IconComponent && (
                    <IconComponent className="text-4xl text-primary" />
                  )}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed z-10">
                  {service.description}
                </p>

                <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
