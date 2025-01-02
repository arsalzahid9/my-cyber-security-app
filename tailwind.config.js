/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00A67E",
          dark: "#005C45",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          dark: "#0F0F0F",
        },
        background: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        mega: "20rem",
        huge: "15rem",
        "7xl": "5rem",
        "8xl": "6rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.12)",
        hover: "0 12px 40px rgba(65, 163, 112, 0.1)",
      },
      opacity: {
        15: "0.15",
        85: "0.85",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        glow: "glow 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          to: { opacity: "1" },
        },
        slideUp: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glow: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      backdropBlur: {
        md: "12px",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "gradient-card":
          "linear-gradient(180deg, rgba(65, 163, 112, 0.1) 0%, rgba(65, 163, 112, 0) 100%)",
      },
      scale: {
        102: "1.02",
        103: "1.03",
      },
      transitionDuration: {
        400: "400ms",
      },
      zIndex: {
        behind: "-1",
        normal: "1",
        above: "2",
        top: "10",
      },
    },
  },

  plugins: [],
};
