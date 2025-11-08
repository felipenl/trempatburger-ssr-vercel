import type React from 'react';

export type FadeInProps = {
  children?: React.ReactNode;
  axis?: 'y' | 'x';
  delay?: number;
  margin?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export type FadeInContainerProps = {
  children: React.ReactNode;
  delay?: number;
};
