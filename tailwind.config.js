/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0033CC",
          dark: "#637492",
          light: "#002380",
        },
        white: {
          DEFAULT: "#FFFFFF",
          light: "#FEFEFE",
          dark: "#F5F5F5",
          vdark: "#FDF5F5",
        },
        grey: {
          DEFAULT: "#647067",
          light: "#EAF9D6",
          dark: "#749D1C",
          vlight: "#F6FCF3",
          vdark: "#A0A4A8",
        },
        black: {
          DEFAULT: "#000000",
          light: "#1E2721",
          vlight: "#666",
          dark: "#2F3C33",
          vdark: "#5F5F5F",
        },
        green: {
          DEFAULT: "#58FD0A",
          light: "#B2FF87",
          dark: "#1A4402",
          vlight: "#C8EE98",
        },
        parrot: {
          DEFAULT: "rgba(88, 253, 10, 0.25)",
          light: "#1AA928",
          vlight: "#ECFCCB",
          dark: "#4CAC7B",
          vdark: "#D3F9D8",
        },
        red: {
          DEFAULT: "#FFE4E7",
          light: "#BBDE8E",
          vlight: "rgba(26, 68, 2, 0.50)",
          dark: "rgba(0, 0, 0, 0.25)",
          vdark: "rgba(26, 68, 2, 0.50)",
        },
        blue: {
          DEFAULT: "#EFF6FF",
          light: "#EDE9FE",
          dark: "#262626",
          vlight: "#333",
          vdark: "#52575C",
          skyblue: "#D0EBFF",
          darkblue: "#339AEF",
        },
        brown: {
          DEFAULT: "#343A40",
          light: "#ECF0F2",
          dark: "#868E96",
          vlight: "#51CD65",
          vdark: "#DADADA",
        },
      },
      boxShadow: {
        custom: "0px 3px 9.1px -1px rgba(0, 0, 0, 0.4)",
      },
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      tiny: "14px",
      base: "15px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "22px",
      "4xl": "24px",
      "5xl": "25px",
      "6xl": "30px",
      "7xl": "35px",
      "8xl": "36px",
      "9xl": "38px",
      "10xl": "40px",
      "11xl": "45px",
      "12xl": "65px",
    },
    screens: {
      "min-600": "600px",
    },
    boxShadow: {
      "left-lg": "5px 0 10px 0 rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  variants: {
    extend: {
      scrollbar: ["hidden"],
    },
  },
  safelist: ["scrollbar-hidden"],
});
