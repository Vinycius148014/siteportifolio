/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Include all app files so NativeWind/Tailwind can detect class usage.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 50s linear infinite',
        scrollRight: 'scrollRight 50s linear infinite',
        scrollLeftMobile: 'scrollLeft 18s linear infinite',
        scrollRightMobile: 'scrollRight 18s linear infinite',
      },

    },
  },
  plugins: [],
}
