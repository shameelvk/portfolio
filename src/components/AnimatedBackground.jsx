import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Define floating orbs with different positions and animations
  const orbs = [
    {
      id: 1,
      size: 'w-96 h-96',
      gradient: 'bg-gradient-to-br from-primary/20 to-red-600/20',
      initialX: '10%',
      initialY: '20%',
      animateX: ['10%', '15%', '5%', '10%'],
      animateY: ['20%', '25%', '15%', '20%'],
    },
    {
      id: 2,
      size: 'w-[500px] h-[500px]',
      gradient: 'bg-gradient-to-br from-red-500/15 to-primary/15',
      initialX: '70%',
      initialY: '60%',
      animateX: ['70%', '75%', '65%', '70%'],
      animateY: ['60%', '55%', '65%', '60%'],
    },
    {
      id: 3,
      size: 'w-80 h-80',
      gradient: 'bg-gradient-to-br from-primary/25 to-red-400/25',
      initialX: '50%',
      initialY: '80%',
      animateX: ['50%', '55%', '45%', '50%'],
      animateY: ['80%', '75%', '85%', '80%'],
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.gradient} rounded-full blur-3xl opacity-50`}
          style={{
            left: orb.initialX,
            top: orb.initialY,
          }}
          animate={{
            x: orb.animateX,
            y: orb.animateY,
          }}
          transition={{
            duration: 20 + orb.id * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
