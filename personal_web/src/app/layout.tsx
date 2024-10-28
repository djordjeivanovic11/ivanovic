import './globals.css';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { robotoMono } from './fonts/fonts';

export const metadata = {
  title: 'Djordje Ivanovic',
  description: "Djordje Ivanovic's Portfolio",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#1c0101]">
      <body className={`${robotoMono.className} overflow-y-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
