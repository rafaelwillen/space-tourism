const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      primary: "#0b0d17",
      secondary: "#d0d6f9",
      white: "#fff",
    },
    fontFamily: {
      heading: ["var(--font-bellefair)", ...fontFamily.sans],
      "body-condensed": ["var(--font-barlow-condensed)", ...fontFamily.sans],
      body: ["var(--font-barlow)", ...fontFamily.sans],
    },
    fontSize: {
      "heading-1": "150px",
      "heading-2": "100px",
      "heading-3": "56px",
      "heading-4": "32px",
      "heading-5": [
        "28px",
        {
          letterSpacing: "4.75px",
        },
      ],
      "subheading-1": "28px",
      "subheading-2": [
        "14px",
        {
          letterSpacing: "2.35px",
        },
      ],
      "nav-text": [
        "16px",
        {
          letterSpacing: "2.7px",
        },
      ],
      body: "18px",
    },
  },
  plugins: [],
};
