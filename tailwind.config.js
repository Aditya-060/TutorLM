/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#536b78',        // Slate Blue for the outer app frame
                    primary: '#277484',   // Dark Cyan for buttons/gradients
                    accent: '#fad5c4',    // Light peach/orange for cards
                    surface: '#ffffff',   // White for main container
                    text: '#06231d',      // Keep dark for text on white
                    muted: '#859ca8',     // Muted slate for sidebar inactive icons
                    dark: '#1e293b',
                    card: '#ffffff'
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            animation: {
                'fade-in': 'fade-in 0.4s ease-in-out',
                'slide-in-left': 'slide-in-left 0.4s ease-in-out',
                'slide-up': 'slide-up 0.4s ease-out'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
