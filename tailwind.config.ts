import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
