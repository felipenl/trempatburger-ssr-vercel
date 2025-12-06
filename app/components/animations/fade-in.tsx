import type { FadeInProps } from '@/types/animations';
import { Skeleton } from '@components/ui/skeleton';
import useLazyMount from '@hooks/useLazyMount';
import { motion, type UseInViewOptions } from 'framer-motion';

export default function FadeIn({
  children,
  axis = 'y',
  margin = 100,
  delay = 0,
  duration = 0.3,
  once = true,
  className,
}: FadeInProps) {
  const { ref, isInView } = useLazyMount<HTMLDivElement>({
    margin: margin ? (`-${margin}px` as UseInViewOptions['margin']) : undefined,
    once,
  });

  if (!isInView) return <Skeleton ref={ref} />;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, [axis]: margin }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      transition={{
        duration,
        delay: delay * 0.1,
        ease: 'easeOut',
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}
