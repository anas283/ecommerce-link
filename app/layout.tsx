import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Stellium - Shoppable Link in Bio for E-Commerce",
  description: "Turn your bio into a sales powerhouse with Stellium. Create shoppable links, track real-time analytics, and accept payments via Stripe & PayPal – all in one simple tool.",
  keywords: "link in bio, shop, online shop, online store",
  openGraph: {
    title: 'Stellium - Shoppable Link in Bio for E-Commerce',
    description: 'Turn your bio into a sales powerhouse with Stellium. Create shoppable links, track real-time analytics, and accept payments via Stripe & PayPal – all in one simple tool.',
    images: "/meta-image.png"
  },
  twitter: {
    title: 'Stellium - Shoppable Link in Bio for E-Commerce',
    description: 'Turn your bio into a sales powerhouse with Stellium. Create shoppable links, track real-time analytics, and accept payments via Stripe & PayPal – all in one simple tool.',
    images: "/meta-image.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
