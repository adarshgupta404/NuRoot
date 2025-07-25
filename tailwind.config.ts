import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        background: "hsl(var(--background))", // This will be white
        foreground: "hsl(var(--foreground))", // This will be a dark brown
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom NuRoot Naturals colors
        "sage-green": {
          DEFAULT: "#84A98C", // Primary green
          50: "#EBF2ED",
          100: "#D7E4D9",
          200: "#C3D6C6",
          300: "#AFCACD",
          400: "#9BBCC0",
          500: "#84A98C",
          600: "#6F9177",
          700: "#5A7962",
          800: "#45614D",
          900: "#304938",
        },
        "walnut-brown": {
          DEFAULT: "#4A3728", // Secondary brown
          50: "#EAE7E5",
          100: "#D6D0CC",
          200: "#C2B9B3",
          300: "#AEA29A",
          400: "#9A8B81",
          500: "#4A3728",
          600: "#3F2F22",
          700: "#34271C",
          800: "#291F16",
          900: "#1E1710",
        },
        "ivory-beige": {
          // Now a very light off-white for subtle backgrounds
          DEFAULT: "#FDFCFB", // Very light off-white
          50: "#FDFCFB",
          100: "#FCFBF9",
          200: "#FBF9F7",
          300: "#FAF8F5",
          400: "#F9F7F3",
          500: "#F8F5ED", // Original ivory-beige, kept for reference if needed
          600: "#D4D1C9",
          700: "#B0ADAA",
          800: "#8C8986",
          900: "#686562",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
