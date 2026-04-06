import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Tag = href ? 'a' : 'div';
  const linkProps = href ? { href, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined } : {};

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <Tag
        {...linkProps}
        onClick={onClick}
        className={className}
        data-cursor="pointer"
      >
        <motion.span
          animate={{ scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-2"
        >
          {children}
        </motion.span>
      </Tag>
    </motion.div>
  );
}
