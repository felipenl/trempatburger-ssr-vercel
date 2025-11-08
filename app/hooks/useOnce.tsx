import { useEffect } from 'react';

export default function useOnce<T extends unknown[]>(cb: (...args: T) => void, ...args: T) {
  useEffect(() => {
    cb(...args);
  }, []);
}
