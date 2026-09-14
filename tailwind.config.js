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
                silkscreen: ['Silkscreen', 'monospace'],
                display: ['Silkscreen', 'monospace'],
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                void: '#0a0908',
                panel: {
                    DEFAULT: '#131110',
                    alt: '#1a1716',
                },
                line: '#2a2523',
                ink: '#ede8e3',
                muted: '#8f857e',
                maroon: {
                    DEFAULT: '#8c2438',
                    bright: '#b4324c',
                },
                success: {
                    DEFAULT: '#10A37F',
                    bright: '#00C896',
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
