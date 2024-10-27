'use client';

import './globals.css';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { robotoMono } from './fonts/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={robotoMono.className}>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
)
}



