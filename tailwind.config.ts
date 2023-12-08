import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        glow: [
          '0 0px 2rem rgba(97, 239, 255, 0.35)',
          '0 0px 3rem rgba(255, 255,255, 0.2)',
        ],
      },
      colors: {
        'dark-gray': '#333333',
        gray: {
          '550': '#555662',
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
