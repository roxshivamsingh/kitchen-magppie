/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'index.html',
        './app/**/*.{js,jsx,ts,tsx}',
        // './kitchen/**/*.{js,jsx,ts,tsx}',
        // './cms/**/*.{js,jsx,ts,tsx}',
        // './stories/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js',
    ],
    plugins: [require('flowbite/plugin')],
}
