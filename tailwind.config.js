/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   para: "rgb(137, 137, 137)",
    // },
    fontFamily: {
      jost: "Jost",
      allison: "Allison",
    },
    extend: {
      backgroundImage: {
        homeBg: "url('/src/assets/homeBg.jpg')",
        bannerBg: "url('/src/assets/BannerImg.jpg')",
        contactBg: "url('/src/assets/contactBg.jpg')"
      },
    },
  },
  plugins: [],
};
