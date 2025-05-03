/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["var(--font-satoshi)", "sans-serif"],
                sans: ["var(--font-satoshi)", "sans-serif"],
            },
            colors: {
                "jithbo-green": "var(--color-jithbo-green)",
                "pure-green": "var(--color-pure-green)",
                "light-yellow": "var(--color-light-yellow)",
                "terra-cotta": "var(--color-terra-cotta)",
                "primary-blue": "var(--color-primary-blue)",
                "gray-blue": "var(--color-gray-blue)",
                "light-apricot": "var(--color-light-apricot)",
                "light-gray": "var(--color-light-gray)",
                "light-gray-stroke": "var(--color-light-gray-stroke)",
                "night-black": "var(--color-night-black)",
            },
        },
    },
    plugins: [],
};
