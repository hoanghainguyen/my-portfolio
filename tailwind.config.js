// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,ts}' // Scan all HTML and TS files for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif']
      },
      colors: {
        primary: 'oklch(0.84 0.18 117.33)'
      }
    }
  },
  plugins: []
};
