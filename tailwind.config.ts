import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'magenta100': '#E80F88',
        'magenta400': '#AF0171',
        'magenta800': '#790252',
        'magenta1000': '#4C0033',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
