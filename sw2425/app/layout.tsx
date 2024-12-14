import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Startup Week by Tech@NYU",
  description: "NYU's premier student led entrepreneurship event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <ReactLenis root>
        <body>{children}</body>
      </ReactLenis>
    </html>
  );
}
