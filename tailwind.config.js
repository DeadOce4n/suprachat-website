/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        accent: ['Poppins', 'sans-serif'],
        logo: ['BabaPro']
      },
      colors: {
        'fg-alt': '#E9E0D7',
        'bg-alt': '#021027',
        'modal-backdrop': 'rgb(148 163 184  / 0.2)'
      }
    }
  },
  daisyui: {
    logs: false,
    themes: [
      {
        dark: {
          primary: '#FFE36F',
          secondary: '#9DACFF',
          accent: '#FFA90A',
          neutral: '#81859C',
          'base-100': '#010813',
          info: '#62BDF2',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
