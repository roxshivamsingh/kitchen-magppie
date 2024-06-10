/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js',
    ],
    plugins: [require('flowbite/plugin')],
}
