import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Improved spring config for smoother, more delayed movement
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Outer ring - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-white"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.4 : 0.8,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Inner dot - follows cursor directly with less delay */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-white"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
