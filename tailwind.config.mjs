/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy:   { DEFAULT: '#0A1628', light: '#0F2040', 800: '#0d1d35', 900: '#070f1a' },
        blue:   { DEFAULT: '#0099EE', dark: '#0066BB', light: '#33BBFF', pale: '#E8F4FF', 50: '#f0f9ff' },
        teal:   { DEFAULT: '#00B4A0', dark: '#008F7E', light: '#33C9B8', pale: '#E6F7F5' },
        indigo: { DEFAULT: '#6366F1', dark: '#4F46E5', light: '#818CF8', pale: '#EEF2FF' },
      },
      fontFamily: {
        sans:    ['"Exo 2"', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl:  '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card:  '0 4px 24px rgba(0,100,200,0.09)',
        hover: '0 12px 40px rgba(0,100,200,0.16)',
        blue:  '0 4px 16px rgba(0,153,238,0.35)',
        teal:  '0 4px 16px rgba(0,180,160,0.35)',
        indigo:'0 4px 16px rgba(99,102,241,0.35)',
      },
      maxWidth: { '8xl': '88rem' },
    },
  },
  plugins: [],
};
