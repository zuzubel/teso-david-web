import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        // Burgundy – logo, buttons, icons, CTA banners
        accent: {
          DEFAULT: '#9e2a36',
          50: '#fbf0f1',
          100: '#f4dadd',
          700: '#7f2029',
        },
        // Light sage – header and footer background
        sage: {
          DEFAULT: '#d3daa6',
          200: '#bcc48a',
        },
        // Olive – phone button text and menu icon. A darker shade than the design's #a3aa68,
        // which is too low-contrast for text on white.
        olive: {
          700: '#6b7238',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
