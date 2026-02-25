import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Hello Everyone, Welcome to my Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
