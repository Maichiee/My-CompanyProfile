import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        heading: ['var(--font-oswald)'],
      },
      backgroundImage: {
        hero: 'url(/assets/img/hero/bg.png)',
        membership: 'url(/assets/img/membership/bg.jpg)',
      },
      colors: {
        primary: {
          DEFAULT: '#333',
          100: '#484848',
          200: '#151515',
          300: '#111',
        },
        accent: '#d4000d'
      }
    },
  },
  plugins: [],
} satisfies Config;
