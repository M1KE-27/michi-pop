import { useEffect, useRef, type ReactNode } from 'react';
import { animate, inView } from 'motion';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: 'rise' | 'side' | 'scale' | 'tilt';
}

const variants = {
  rise: { y: 24 },
  side: { x: -28 },
  scale: { scale: 0.94 },
  tilt: { y: 16, rotate: -2 },
} as const;

export default function RevealOnScroll({ children, className = '', variant = 'rise' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const initial = variants[variant];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) return;

    if (initial.y !== undefined) element.style.transform = `translate3d(${initial.x ?? 0}px, ${initial.y}px, 0) rotate(${initial.rotate ?? 0}deg) scale(${initial.scale ?? 1})`;
    if (initial.x !== undefined) element.style.transform = `translate3d(${initial.x}px, ${initial.y ?? 0}px, 0) rotate(${initial.rotate ?? 0}deg) scale(${initial.scale ?? 1})`;
    if (initial.scale !== undefined) element.style.transform = `translate3d(0, 0, 0) rotate(0deg) scale(${initial.scale})`;
    element.style.opacity = '0';

    const cleanup = inView(element, () => {
      animate(element, {
        opacity: [0, 1],
        y: [initial.y ?? 0, 0],
        x: [initial.x ?? 0, 0],
        scale: [initial.scale ?? 1, 1],
        rotate: [initial.rotate ?? 0, 0],
      }, {
        duration: 0.62,
        easing: [0.22, 1, 0.36, 1],
      });
    }, { amount: 0.18, once: true });

    return () => cleanup();
  }, [variant]);

  return <div ref={ref} className={className}>{children}</div>;
}
