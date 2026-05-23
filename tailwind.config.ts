import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', "system-ui", "sans-serif"],
        mono: ['JetBrains Mono', "monospace"],
        display: ['Instrument Serif', "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-foreground)",
            "--tw-prose-headings": "var(--color-foreground)",
            "--tw-prose-lead": "var(--color-muted-foreground)",
            "--tw-prose-links": "var(--color-primary)",
            "--tw-prose-bold": "var(--color-foreground)",
            "--tw-prose-counters": "var(--color-muted-foreground)",
            "--tw-prose-bullets": "var(--color-border)",
            "--tw-prose-hr": "var(--color-border)",
            "--tw-prose-quotes": "var(--color-foreground)",
            "--tw-prose-quote-borders": "var(--color-border)",
            "--tw-prose-captions": "var(--color-muted-foreground)",
            "--tw-prose-kbd": "var(--color-foreground)",
            "--tw-prose-kbd-box-shadow": "var(--color-muted-foreground)",
            "--tw-prose-code": "var(--color-primary)",
            "--tw-prose-pre-code": "var(--color-background)",
            "--tw-prose-pre-bg": "var(--color-foreground)",
            "--tw-prose-th-borders": "var(--color-border)",
            "--tw-prose-td-borders": "var(--color-border)",
            color: {
              primary: "var(--color-primary)",
              foreground: "var(--color-foreground)",
              muted: "var(--color-muted)",
              mutedForeground: "var(--color-muted-foreground)",
              popover: "var(--color-popover)",
              popoverForeground: "var(--color-popover-foreground)",
              card: "var(--color-card)",
              cardForeground: "var(--color-card-foreground)",
              border: "var(--color-border)",
              input: "var(--color-input)",
              ring: "var(--color-ring)",
              background: "var(--color-background)",
              accent: "var(--color-accent)",
              accentForeground: "var(--color-accent-foreground)",
              destructive: "var(--color-destructive)",
              destructiveForeground: "var(--color-destructive-foreground)",
            },
            a: {
              color: "var(--color-primary)",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "var(--color-primary)",
                textDecoration: "none",
              },
            },
            code: {
              color: "var(--color-primary)",
              fontSize: "0.875em",
              backgroundColor: "var(--color-muted)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--color-border)",
              padding: "0.125em 0.375em",
            },
            pre: {
              backgroundColor: "var(--color-foreground)",
              color: "var(--color-background)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--color-border)",
              padding: "1.25rem",
              overflow: "auto",
            },
            h1: {
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            },
            h2: {
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            },
            table: {
              borderCollapse: "collapse",
              border: "1px solid var(--color-border)",
              width: "100%",
            },
            th: {
              border: "1px solid var(--color-border)",
              padding: "0.5rem",
              backgroundColor: "var(--color-muted)",
            },
            td: {
              border: "1px solid var(--color-border)",
              padding: "0.5rem",
            },
            tr: {
              borderBottom: "1px solid var(--color-border)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;