import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rateglobal.com"),
  title: {
    default: "Rate Global — High-Performing Web Experiences & Digital Engineering",
    template: "%s | Rate Global",
  },
  description:
    "Rate Global engineers bespoke web platforms, custom SaaS products, and high-converting digital experiences with Next.js, TypeScript, and modern architectures.",
  keywords: [
    "Web Development",
    "Next.js Agency",
    "SaaS Development",
    "Custom Web Applications",
    "Full-Stack Engineering",
    "Rate Global",
    "Digital Product Studio",
  ],
  authors: [{ name: "Rate Global Engineering Team" }],
  creator: "Rate Global",
  publisher: "Rate Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rate Global — High-Performing Web Experiences",
    description:
      "We design and build bespoke web applications, platforms, and SaaS products — user-first, outcome-driven.",
    url: "https://rateglobal.com",
    siteName: "Rate Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rate Global — High-Performing Web Experiences",
    description:
      "Bespoke web platforms, SaaS applications, and modern digital engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 bg-[#F4F6FB] text-brand-charcoal">
        {children}
      </body>
    </html>
  );
}
