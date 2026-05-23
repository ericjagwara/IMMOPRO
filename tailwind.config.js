/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        navy: {
          DEFAULT: '#111E46',
          light: '#1a2d5c',
        },
        cyan: {
          DEFAULT: '#018ABF',
          light: '#01a3d9',
        },
        grey: {
          dark: '#6A6A6A',
          medium: '#919191',
          light: '#E5E5E5',
          bg: '#F3F3F3',
          offwhite: '#FAFAFA',
        },
        error: '#F25454',
      },
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Merriweather"', 'serif'],
      },
      fontSize: {
        h1: ['clamp(3.6rem, 8vw, 10rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(2.8rem, 4vw, 5.8rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['clamp(2.4rem, 3vw, 3.8rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h4: ['clamp(2rem, 2vw, 2.8rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h5: ['clamp(1.8rem, 1.5vw, 2.2rem)', { lineHeight: '1.2' }],
        h6: ['1.6rem', { lineHeight: '1.3' }],
        'body-lg': ['clamp(1.4rem, 1.2vw, 1.6rem)', { lineHeight: '1.6' }],
        'body': ['clamp(1.2rem, 1vw, 1.4rem)', { lineHeight: '1.6' }],
        'body-sm': ['clamp(1rem, 0.9vw, 1.2rem)', { lineHeight: '1.5' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '2rem',
        '3xl': '17px',
        '4xl': '20px',
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 10rem)',
        'content': 'clamp(2rem, 4vw, 5rem)',
        'header': '7.6rem',
        'header-mobile': '5.4rem',
      },
      maxWidth: {
        'container': '140rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'header': '0 0 10px rgba(0,0,0,0.1)',
        'card': '0 4px 15px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.1)',
        'plan': '0 10px 30px rgba(0,0,0,0.1)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "stroke-draw": {
          from: { strokeDashoffset: "200" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "stroke-draw": "stroke-draw 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
