import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#000000",
          dark: "#0A0A0A",
        },
        foreground: {
          DEFAULT: "#d1d1d1",
          dark: "#ffffff",
        },
        primary: {
          DEFAULT: "#FF570A",
          foreground: "#ffffff",
          dark: "#FF6B2B",
        },
        secondary: {
          DEFAULT: "#D946EF",
          foreground: "#ffffff",
          dark: "#E165F3",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#696969",
          foreground: "#d1d1d1",
          dark: "#404040",
        },
        accent: {
          DEFAULT: "#696969",
          foreground: "#d1d1d1",
          dark: "#808080",
        },
        card: {
          DEFAULT: "#111111",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
        body: ['Raleway ExtraLight', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          }
        },
        "slide-in": {
          "0%": { 
            transform: "translateX(-20px)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "translateX(0)", 
            opacity: "1" 
          }
        },
        "scale": {
          "0%": { 
            transform: "scale(0.95)",
            opacity: "0" 
          },
          "100%": { 
            transform: "scale(1)",
            opacity: "1" 
          }
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-10px)" 
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        "scale": "scale 0.4s ease-out",
        "float": "float 3s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;