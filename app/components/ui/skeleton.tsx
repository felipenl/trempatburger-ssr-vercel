import { cn } from '@lib/utils';
import type React from 'react';
import { forwardRef } from 'react';

const Skeleton = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('bg-primary/10 animate-pulse rounded-md', className)} {...props} />
  )
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
