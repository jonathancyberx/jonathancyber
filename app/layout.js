import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Ayodele | Cybersecurity Professional",
  description: "Jonathan is a skilled cybersecurity professional with knowledge in various domains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
