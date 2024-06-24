/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "primary": "#ff4b4b",
      "secondary": "#ffffff",
      "danger": "#f44336",
      "success": "#4caf50",
      "warning": "#ff9800",
      "info": "#2196f3",
      "background-primary": "#ffffff",
      "background-secondary": "#11111b",
      "primary-dark": "#f9e2af",
        "secondary-dark": "#6176dc",
        "danger-dark": "#f44336",
        "success-dark": "#4caf50",
        "warning-dark": "#ff9800",
        "info-dark": "#2196f3",
        "background-primary-dark": "#11111b",
        "background-secondary-dark": "#cdd6f4",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
