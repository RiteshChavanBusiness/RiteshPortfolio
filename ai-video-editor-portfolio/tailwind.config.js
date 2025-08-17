/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        background: "hsl(240 10% 6%)",
        foreground: "hsl(0 0% 98%)",
        muted: "hsl(240 5% 20%)",
        card: "hsl(240 7% 10%)",
        border: "hsl(240 5% 18%)",
        primary: { DEFAULT: "hsl(262 83% 58%)", foreground: "#fff" },
        accent: { DEFAULT: "hsl(199 89% 48%)", foreground: "#fff" }
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
      boxShadow: { soft: "0 12px 40px -12px rgba(0,0,0,0.5)" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
        gradient: "gradient 8s ease infinite"
      },
      backgroundSize: { "300": "300% 300%" }
    }
  },
  plugins: [],
}
