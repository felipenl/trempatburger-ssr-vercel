// SSR detection
export const isServer = import.meta.env.SSR;
export const isBrowser = !isServer;

// Environment
export const isProduction = import.meta.env.PROD;
export const isDevelopment = import.meta.env.DEV;

export const saveToStorage = (Key: string, value?: string) => {
  if (isBrowser) {
    if (!value) return localStorage.removeItem(Key);
    localStorage.setItem(Key, value);
  }
};

export const getFromStorage = (Key: string) => {
  if (isBrowser) {
    const value = localStorage.getItem(Key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
  }
  return null;
};
