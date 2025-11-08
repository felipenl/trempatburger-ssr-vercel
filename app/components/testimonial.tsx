import { Quote } from 'lucide-react';
import React from 'react';
import LazyImg from './lazy/lazy-image';
import { cn } from '@lib/utils';

type TestimonialProps = React.PropsWithChildren & {
  content?: string;
  avatar?: React.ReactNode;
  col?: boolean;
  quotes?: boolean;
  className?: string;
  avatarSrc?: string;
};

function Testimonial({
  children,
  content,
  avatar,
  col,
  quotes = true,
  avatarSrc,
  className = '',
}: TestimonialProps) {
  return (
    <div className={cn('testimonial', className)}>
      <div className={cn('flex items-center', { 'flex-col': col })}>
        <div className="mx-auto">{avatar}</div>
        {avatarSrc && (
          <LazyImg
            src={avatarSrc}
            alt="User avatar"
            className="aspect-square rounded-full shadow-md"
          />
        )}
        <div className="relative flex-1">
          <Quote
            className={cn(
              'text-foreground/50 absolute -top-2 -left-2 rotate-180',
              !quotes && 'hidden'
            )}
          />

          <div className="p-4">
            {content}
            {children}
          </div>
          <Quote
            className={cn('text-foreground/50 absolute -right-2 -bottom-2', !quotes && 'hidden')}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
