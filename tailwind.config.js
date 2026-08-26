/** @type {import('tailwindcss').Config} */
// Force Vite compiler to dump cache
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Forces Tailwind to use the "dark" class strategy instead of system media queries
    theme: {
        extend: {
            animation: {
                'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: .5 },
                }
            }
        },
    },
    plugins: [],
}
