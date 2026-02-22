import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const creatoDisplay = localFont({
  src: [
    { path: "./fonts/CreatoDisplay-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/CreatoDisplay-Light.otf", weight: "300", style: "normal" },
    {
      path: "./fonts/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CreatoDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    { path: "./fonts/CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
    {
      path: "./fonts/CreatoDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    { path: "./fonts/CreatoDisplay-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-creato-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Summer Xia • Your Personal Property Consultant",
  description: "The profile of Summer Xia, Property Consultant.",
  openGraph: {
    title: "Summer Xia • Your Personal Property Consultant",
    description: "The Website of Summer Xia, Property Consultant.",
    url: "https://summer-xia.vercel.app/",
    siteName: "Summer Xia",
    images: [
      {
        url: "https://summer-xia.vercel.app/images/summer-headshot.jpg", // must be in /public
        width: 666,
        height: 703,
        alt: "Summer Xia - Your Personal Property Consultant",
      },
    ],
    type: "website",
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
        className={`${creatoDisplay.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
