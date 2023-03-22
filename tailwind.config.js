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
        accent: ['Poppins', 'sans-serif']
      }
    }
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#FFE36F',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#000A14',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
