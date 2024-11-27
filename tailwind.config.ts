import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        indigo: '#1e2044',
        gray: {
          100: '#F1EFEF',
          700: '#625C5C',
        },
        slate: {
          900: '#000000',
        },
        yellow: {
          100: '#ffff00',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
