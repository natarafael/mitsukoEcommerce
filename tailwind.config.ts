/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#F2DFD7",

          secondary: "#FDECEF",

          accent: "#FDECEF",

          neutral: "#FAF9F9",

          "base-100": "#ffffff",

          info: "#ffffff",

          success: "#D9F4C7",

          warning: "#F4B08D",

          error: "#F6B3B3",

          body: {
            "background-color": "#FFE1EA",
            height: "100vh",
          },
        },
      },
    ],
  },
};
