import type { Metadata } from "next";
import "./globals.css";

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
      <body
      >
        {children}
      </body>
    </html>
  );
}
