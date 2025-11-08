import { isBrowser, isServer } from '@lib/environment';
import React from 'react';
import useEventListener from './useEventListener';
import { debounce } from '@lib/debounce';

type Layout = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const computeLayout = (window: globalThis.Window) => {
  if (!isBrowser) {
    return {
      width: 0,
      height: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
  };
};

function useLayout() {
  const [layout, setLayout] = React.useState<Layout>(computeLayout(globalThis.window));

  const resize = debounce(() => {
    if (isServer) return;
    setLayout(computeLayout(globalThis.window));
  }, 200);

  useEventListener('resize', resize);

  return layout;
}

export default useLayout;
