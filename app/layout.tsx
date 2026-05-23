import { ClerkProvider } from "@clerk/nextjs"
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"

import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
}

export const metadata: Metadata = {
  title: "Forged Codes — Infrastructure for Software Supply Chains",
  description: "Grip provides the backend — hosting, version control, CI/CD, registry, security — and you build the experience.",
  keywords: ["version control", "infrastructure", "supply chain", "CI/CD", "registry", "deployment"],
  authors: [{ name: "AWFixer Enterprising Inc" }],
  creator: "Forged Codes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forged.codes",
    title: "Forged Codes — Infrastructure for Software Supply Chains",
    description: "Grip provides the backend — hosting, version control, CI/CD, registry, security — and you build the experience.",
    siteName: "Forged Codes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forged Codes — Infrastructure for Software Supply Chains",
    description: "Grip provides the backend — hosting, version control, CI/CD, registry, security — and you build the experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        instrumentSans.variable,
        instrumentSerif.variable,
        jetbrainsMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}