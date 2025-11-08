import type { FadeInProps } from '@/types/animations';
import { motion } from 'framer-motion';
import type React from 'react';

export function withFadeIn<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { axis = 'y', margin = 100, delay = 0, duration = 0.3, once = true }: FadeInProps = {}
) {
  const FadeInWrapper: React.FC<P> = props => (
    <motion.div
      initial={{ opacity: 0, [axis]: `${margin}px` }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      transition={{
        duration,
        delay: delay * 0.1,
        ease: 'easeOut',
      }}
      viewport={{ once }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );

  FadeInWrapper.displayName = `withFadeIn(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return FadeInWrapper;
}
