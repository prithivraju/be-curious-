/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0a0a0a',
        'surface-elevated': '#111111',
        border: 'rgba(255, 255, 255, 0.1)',
        'border-strong': 'rgba(255, 255, 255, 0.2)',
        'border-focus': '#FFD700',
        'text-disabled': 'rgba(255, 255, 255, 0.25)',
        accent: {
          gold: '#FFD700',
          green: '#22c55e',
          red: '#ef4444',
          blue: '#3b82f6',
          purple: '#a855f7',
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.4)',
        }
      },
      borderRadius: {
        sm: 'var(--radius-sm, 0.375rem)',
        md: 'var(--radius-md, 0.5rem)',
        lg: 'var(--radius-lg, 0.75rem)',
        xl: 'var(--radius-xl, 1rem)',
        full: 'var(--radius-full, 9999px)',
      },
      boxShadow: {
        'gold': '0 4px 20px -4px rgba(255, 215, 0, 0.35)',
        'green': '0 4px 20px -4px rgba(34, 197, 94, 0.35)',
        'red': '0 4px 20px -4px rgba(239, 68, 68, 0.35)',
        'blue': '0 4px 20px -4px rgba(59, 130, 246, 0.35)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'monospace'],
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'snap-in': 'snap-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring-back': 'spring-back 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(255, 215, 0, 0.2)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(10px)' },
          '60%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
        },
        'snap-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'spring-back': {
          '0%': { transform: 'translateX(100px)' },
          '50%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
