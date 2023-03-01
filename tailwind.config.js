/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,vue,stories.js}",
        "./src/**/*.vue",
        "./.storybook/formkit.config.js",
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
}
