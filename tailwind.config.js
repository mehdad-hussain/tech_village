module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        wiggle: "wiggle 1s ease-in-out 1",
      },

      keyframes: {
        wiggle: {
          "0%": { transform: " rotateY(-10deg) " },
          "100%": { transform: "rotateY(10deg)" },
        },
      },
    },
    screens: {
      /*---------------------------------------------------------------------
        max-width
      ----------------------------------------------------------------------*/
      "2xlM": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xlM: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgM: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdM: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      smM: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsM: { max: "479px" },
      // => @media (max-width: 479px) { ... }

      /*---------------------------------------------------------------------
      min-width
      ----------------------------------------------------------------------*/
      sxsM: { min: "360px" },
      // => @media (min-width: 360px) { ... }

      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      /*---------------------------------------------------------------------
        both max and min 
      ----------------------------------------------------------------------*/

      sxsB: { min: "360px", max: "479px" },
      // => @media (min-width: 360px and max-width: 479px) { ... }

      xsB: { min: "480px", max: "639px" },
      // => @media (min-width: 480px and max-width: 639px) { ... }

      smB: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      mdB: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lgB: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xlB: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xlB": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    variants: {
      lineClamp: ["responsive", "hover"],
      children: ["& > *"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
