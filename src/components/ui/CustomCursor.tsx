import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { stiffness: 300, damping: 28 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(max-width: 1024px)').matches) return;
    if ('ontouchstart' in window) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="pointer"]');
      setIsHovering(!!interactive);
    };

    const handleLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', () => setIsVisible(true));

    // Hide default cursor
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = `
      @media (min-width: 1025px) {
        a, button, [role="button"], input, select, textarea { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
      document.body.style.cursor = '';
      document.getElementById('custom-cursor-style')?.remove();
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on mobile/touch
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) {
    return null;
  }

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999]">
      {/* Outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? 'rgba(218, 165, 32, 0.8)' : 'rgba(218, 165, 32, 0.4)',
        }}
        transition={{ duration: 0.2 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] backdrop-blur-[1px]"
      />

      {/* Inner dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400"
      />
    </div>
  );
}
