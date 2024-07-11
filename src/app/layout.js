import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zawadi Motors",
  description: "Rev up your dreams at Zawadi Motors! Our showroom boasts an impressive lineup of the latest models from top brands, including Toyota, Mercedes, and Land Rover. Whether you’re seeking luxury, performance, or reliability, we’ve got the perfect ride waiting for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
