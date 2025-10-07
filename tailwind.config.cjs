/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#05060a',
        panel: 'rgba(255,255,255,0.03)',
        glowblue: '#2ca6ff',
        muted: '#9aa6b2'
      },
      boxShadow: {
        'blue-glow-sm': '0 6px 18px rgba(44,166,255,0.10)',
        'blue-glow-md': '0 12px 40px rgba(44,166,255,0.12)',
        'blue-glow-strong': '0 0 40px rgba(44,166,255,0.22)'
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg,#02030a 0%, rgba(10,14,30,0.6) 40%, rgba(2,6,23,0.9) 100%)'
      },
      borderRadius: {
        xl: '14px'
      }
    }
  },
  plugins: []
}
