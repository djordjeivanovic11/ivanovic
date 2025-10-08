import { Inter } from "next/font/google";

// Apple-esque clean typography
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// For backwards compatibility, keep references but map to Inter
export const blackOpsOne = inter;
export const robotoMono = inter;
