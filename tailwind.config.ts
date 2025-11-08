import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Flex', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        riffic: ['Riffic', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'trempat-red': '#D90404',
        'trempat-dark-red': '#730202',
        'trempat-gray': '#D9D2D5',
        'trempat-dark-gray': '#0D0D0D',
      },
    },
  },
  plugins: [],
} satisfies Config;
