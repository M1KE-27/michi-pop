import { useEffect, useRef, type ReactNode } from 'react';
import { animate, inView } from 'motion';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: 'rise' | 'side' | 'scale' | 'tilt';
}

const variants = {
  rise: { y: 24, opacity: 0 },
  side: { x: -28, opacity: 0 },
  scale: { scale: 0.94, opacity: 0 },
  tilt: { y: 16, rotate: -2, opacity: 0 },
} as const;

export default function RevealOnScroll({ children, className = '', variant = 'rise' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const initial = variants[variant];
    const cleanup = inView(element, () => {
      animate(element, { ...initial, y: 0, x: 0, scale: 1, rotate: 0, opacity: 1 }, {
        duration: 0.62,
        easing: [0.22, 1, 0.36, 1],
      });
    }, { amount: 0.18, once: true });
    return () => cleanup();
  }, [variant]);

  return <div ref={ref} className={className}>{children}</div>;
}
