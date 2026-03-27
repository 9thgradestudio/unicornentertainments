import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  // Hide the default cursor globally
  useEffect(() => {
    document.body.style.cursor = 'none';
    const iterators = document.querySelectorAll('a, button, input, textarea, select, .cursor-pointer');
    iterators.forEach((el) => {
      (el as HTMLElement).style.cursor = 'none';
    });
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(212, 189, 114, 0.1)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {/* Minimal Unicorn / Triangle indicator */}
        <motion.div 
           className="w-1 h-1 rounded-none bg-primary clip-path-triangle"
           animate={{
              rotate: isHovering ? 90 : 0,
              scale: isHovering ? 0 : 1
           }}
           style={{
             clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
           }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovering ? 0 : 1
        }}
        transition={{
          type: 'tween',
          duration: 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
