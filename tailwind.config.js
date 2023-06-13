/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jost: "Jost",
      allison: "Allison",
      amiri: "Amiri",
    },
    extend: {
      backgroundImage: {
        homeBg: "url('/src/assets/homeBg.jpg')",
        bannerBg: "url('/src/assets/BannerImg.jpg')",
        contactBg: "url('/src/assets/contactBg.jpg')",
        contactBgGradient:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/01/shutterstock_715249594.jpg')",
      },
    },
  },
  plugins: [],
};
