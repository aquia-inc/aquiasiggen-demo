import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata: Metadata = {
  title: "Aquia Signature Generator Login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-gray-100 min-h-screen font-sans">{children}</body>
    </html>
  );
}
