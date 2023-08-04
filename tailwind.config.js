/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    colors: {
      black: "#0b0d17",
      primary: "#d0d6f9",
      white: "#fff",
    },
    fontFamily: {
      heading: ["var(--heading)"],
      body: ["var(--body)"],
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      fontSize: {
        "heading-1": "9.375rem",
        "heading-2": "6.25rem",
        "heading-3": "3.5rem",
        "heading-4": "2rem",
        "heading-5": "1.75rem",
        "subheading-1": "1.75rem",
        "subheading-2": "0.875rem",
        nav: "1rem",
        body: "1.125rem",
      },
      borderWidth: {
        3: "3px",
      },
      letterSpacing: {
        "heading-5": "4.75px",
        "subheading-2": "2.35px",
        nav: "2.7px",
      },
    },
  },
  plugins: [],
};
