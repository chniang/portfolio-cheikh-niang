module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A0E27',
        navyLight: '#1A1F3A',
        spark: '#FF3DAE',
        lime: '#B6FF3D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: 'blob 18s infinite ease-in-out',
        'blob-slow': 'blob 26s infinite ease-in-out reverse',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
