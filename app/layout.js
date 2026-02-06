import { Geist, Geist_Mono } from "next/font/google";
import { assetPath } from "../lib/assetPath";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School Portal | Student, Parent & Teacher Dashboard",
  description:
    "Our School Portal is a centralized platform for students, parents, and teachers to access academic information, school announcements, admissions, programs, and other school services online.",
  verification: {
    google: "VwRSVoSz5uqnXdFxtAIT6c7OGyMBP6dZ0JZ7_jXRaD8", // this is from google console 
  },
  icons: {
    icon: assetPath("/icons/school.svg"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
