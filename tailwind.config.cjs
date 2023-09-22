/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "regal-blue": "#243c5a",
                "foreground-primary-color": "var(--foreground-primary-color)",
                "foreground-secondary-color": "var(--foreground-secondary-color)",
                "background-primary-color": "var(--background-primary-color)",
                "shadow-color:": "var(--shadow-color)",
                "border-color": "var(--border-color)",
            },
        },
    },
    plugins: [],
});
