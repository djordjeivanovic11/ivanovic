import "./globals.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { inter } from "./fonts/fonts";

export const metadata = {
  title: "Djordje Ivanovic",
  description: "Djordje Ivanovic's Portfolio",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[var(--background)]">
      <body className={`${inter.className} overflow-y-auto antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
