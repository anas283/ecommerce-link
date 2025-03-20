import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaImage from "../public/meta-image.svg";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Stellium - Shoppable Link in Bio for E-Commerce",
  description: "Turn your bio into a sales powerhouse with Stellium. Create shoppable links, track real-time analytics, and accept payments via Stripe & PayPal – all in one simple tool.",
  twitter: {
    card: 'summary_large_image',
    title: 'Stellium - Shoppable Link in Bio for E-Commerce',
    description: 'Turn your bio into a sales powerhouse with Stellium. Create shoppable links, track real-time analytics, and accept payments via Stripe & PayPal – all in one simple tool.',
    images: [MetaImage],
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
