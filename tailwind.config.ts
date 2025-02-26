/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "124px",
        md: "50px",
        lg: "78px",
        xl: "98px",
      },
    },
    extend: {
      colors: {
        "primary-bg": "var(--bg-primary)",
        "gray-dark": "var(--gray-dark)",
        primary: "var(--primary)",
        "gray-text": "var(--text-gray)",
        "light-gray": "var(--light-gray)",
        "light-danger": "var(--light-danger)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
