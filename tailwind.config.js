/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                display: ['Barlow Condensed', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Light mode palette
                cream: {
                    DEFAULT: '#F4EEDB',
                    surface: '#FFFCF5',
                },
                // Accents
                yellow: {
                    DEFAULT: '#FFC51B',
                },
                red: {
                    DEFAULT: '#E53935',
                    bright: '#FF4A45',
                },
                success: {
                    light: '#10A37F',
                    dark: '#00C896',
                },
            },
            animation: {
                'status-blink': 'status-blink 1.5s ease-in-out infinite',
                'slide-in-up': 'slide-in-up 0.4s ease-out',
            },
            keyframes: {
                'status-blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.2' },
                },
                'slide-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: .5 },
                }
            },
        },
    },
    plugins: [],
}
