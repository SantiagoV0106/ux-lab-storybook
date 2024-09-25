/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      fontWeight: {
        'semibold': 600,
        'bold': 700,
        'regular': 400,
      },
      fontSize: {
        "xxxs": "8px",
        "xxs": "10px",
      },
      padding: {
        "custom-xs": "4px",
        "custom-sm": "8px",
        "custom-md": "12px",
        "custom-lg": "16px",
        "custom-xl": "20px",
        "custom-2xl": "24px",
        "custom-3xl": "32px",
      },
      margin: {
        /* Margin === Spacing */
        "custom-xs": "4px",
        "custom-sm": "8px",
        "custom-md": "16px",
        "custom-lg": "24px",
        "custom-xl": "32px",
      },
      borderRadius: {
        /* With Tailwind rounded === border radius */
        "custom-xs": "2px",
        "custom-sm": "4px",
        "custom-md": "8px",
        "custom-lg": "12px"
      },
      colors: {
        primary: {
          blue: {
            50: "#E6EFF6",
            100: "#D9E7F1",
            200: "#B1CEE2",
            300: "#0360A0",
            400: "#035690",
            500: "#024D80",
            600: "#024878",
            700: "#023A60",
            800: "#012B48",
            10: "#012238",
          },
          lightBlue: {
            50: "#ECF9FE",
            100: "#E3F6FD",
            200: "#C4EBFA",
            300: "#42C0F0",
            400: "#3BADD8",
            500: "#359AC0",
            600: "#3290B4",
            700: "#287390",
            800: "#1E566C",
            900: "#174354",
          },
          darkBlue: {
            50: "#E6ECF6",
            100: "#D9E3F1",
            200: "#B0C4E2",
            300: "#0041A3",
            400: "#003B93",
            500: "#003482",
            600: "#00317A",
            700: "#002762",
            800: "#001D49",
            900: "#001739",
          },
        },
        system: {
          successColor: "#3BD4AE",
          errorColor: "#EB5757",
          wariningColor: "#FFCD00",
        },
        background: {
          primary: "#F4F7F9",
          secondary: "#FFFFFF",
        },
        text:{
          text: "#595959",
          caption: "#737373",
          title: "#0041A3"
        },
        neutral: {
          50: "#FFFFFF",
          100: "#F4F7F9",
          200: "#E6E6E6",
          300: "#CCCCCC",
          400: "#BFBFBF",
          500: "#B8B8B8",
          600: "#999999",
          700: "#737373",
          800: "#595959",
          900: "#1A1919",
          1000: "#090909",
        },
        extended: {
          lightViolet: {
            50: "#F5F0FF",
            100: "#F0E8FF",
            200: "#E0D0FF",
            300: "#9A66FF",
            400: "#8B5CE6",
            500: "#7B52CC",
            600: "#744DBF",
            700: "#5C3D99",
            800: "#452E73",
            900: "#362459",
          },
          violet: {
            50: "#F3EAF6",
            100: "#ECE0F2",
            200: "#D9BFE4",
            300: "#8331A7",
            400: "#762C96",
            500: "#692786",
            600: "#62257D",
            700: "#4F1D64",
            800: "#3B164B",
            900: "#2E113A",
          },
          purple: {
            50: "#EAEBF3",
            100: "#DFE1EC",
            200: "#BCC0D9",
            300: "#283583",
            400: "#243076",
            500: "#202A69",
            600: "#1E2862",
            700: "#18204F",
            800: "#12183B",
            900: "#0E132E",
          },
          green: {
            50: "#FBFBEA",
            100: "#F8FAE0",
            200: "#F1F4BF",
            300: "#D2DB2F",
            400: "#BDC52A",
            500: "#A8AF26",
            600: "#9EA423",
            700: "#7E831C",
            800: "#5E6315",
            900: "#4A4D10",
          },
        },
      },
    },
  },
  plugins: [],
};