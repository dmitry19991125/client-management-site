/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '320px',    // Extra small devices
                'sm': '425px',    // Small devices
                'md': '768px',    // Medium devices
                'lg': '1024px',   // Large devices
                'xl': '1280px',   // Extra large devices
                '2xl': '1536px',  // 2X large devices
                // Custom breakpoints for specific requirements
                'mobile': '375px',
                'tablet': '768px',
                'desktop': '1024px',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
}


