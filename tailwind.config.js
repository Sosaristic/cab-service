/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        white: "#fafafa",
        primaryDark: "#5F0A56",
        darkGrey: "#a3a3a3",
        green: "#13B351",
        black: "#0a0a0a",
        red: "#EB4335",
        textGrey: "#52525b",
        background: "rgba(158, 133, 145, 0.6)",
        footer: "#272727",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        jost: ["var(--font-jost)"],
        righteous: ["var(--font-righteous)"],
        permanent_marker: ["var(--font-permanent_marker)"],
      },
      backgroundImage: {
        auth: 'url("/images/taxi-photo.webp")',
      },
      boxShadow: {
        benefits: "8px 8px 48px -16px rgba(242,237,242,1)",
        select_car: "0px 0px 5px 4px rgba(245,232,177,1)",
        select_car_white: " 0px 0px 5px 4px rgba(245,244,242,1)",
      },
    },
  },
  plugins: [],
};
