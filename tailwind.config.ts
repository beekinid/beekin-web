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
        'magenta100': '#ffb8b8',
        'magenta400': '#ed8d8d',
        'magenta800': '#ce5a5a',
        'magenta1000': '#b53737',
        'magenta1200': '#970c0c'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
