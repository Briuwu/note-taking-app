import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        top: "0 -4px 6px 0 rgba(240, 240, 240, 60%)",
        bottom: "0 4px 6px 0 rgba(240, 240, 240, 60%)",
      },
      fontFamily: {
        inter: ["var(--font-inter"],
        "noto-serif": ["var(--font-noto-serif)"],
        "source-code-pro": ["var(--font-source-code-pro)"],
      },
      colors: {
        "neutral-950": "var(--neutral-950)",
        "neutral-900": "var(--neutral-900)",
        "neutral-800": "var(--neutral-800)",
        "neutral-700": "var(--neutral-700)",
        "neutral-600": "var(--neutral-600)",
        "neutral-500": "var(--neutral-500)",
        "neutral-400": "var(--neutral-400)",
        "neutral-300": "var(--neutral-300)",
        "neutral-200": "var(--neutral-200)",
        "neutral-100": "var(--neutral-100)",
        "neutral-50": "var(--neutral-50)",
        "neutral-0": "var(--neutral-0)",
        "blue-700": "var(--blue-700)",
        "blue-500": "var(--blue-500)",
        "blue-50": "var(--blue-50)",
        "green-500": "var(--green-500)",
        "green-100": "var(--green-100)",
        "red-500": "var(--red-500)",
        "red-100": "var(--red-100)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
