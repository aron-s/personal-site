/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/img/hero.jpeg')",
      },
    },
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#6096BA",
        "secondary": "#14FFF7",
        "accent": "#CEFF1A",
        "neutral": "#222027",
        "base-100": "090C02",
        "info": "#38bdf8",
        "success": "#5ceba1",
        "warning": "#fde68a",
        "error": "#DF2935",
      },
      newtheme: {
        "primary": '#4C51BF',
        "secondary": '#1A202C',
        "accent": '#6B46C1',
        "success": '#68D391',
        "warning": '#F6E05E',
        "danger": '#F56565',
        "dark": {
          "100": '#CBD5E0',
          "200": '#A0AEC0',
          "300": '#718096',
          "400": '#4A5568',
          "500": '#2D3748',
          "600": '#1A202C',
          "700": '#171923',
          "800": '#0E1317',
          "900": '#070A0C',
        },
      },
    }],
  },
  plugins: [require("daisyui")],
}
