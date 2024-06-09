const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js',
    ],
    plugins: [flowbite.plugin()],
}
