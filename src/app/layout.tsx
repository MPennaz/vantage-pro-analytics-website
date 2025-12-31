// src/spp/layout.tsx

import type { Metadata } from "next";
import { Jost } from "next/font/google";
import AppProviders from "@/components/wrappers/AppProviders";
import logo from '@/assets/images/logo.png'
import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';


import 'aos/dist/aos.css';
import "../assets/css/style.css";

const jostSans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vantage Pro Analytics",
    default: "Vantage Pro Analytics",
  },
  description:
    "Vantage Pro Analytics is a smart operations layer for manufacturers—turning PDFs, spreadsheets, and plant data into clear, role-based insights.",
};


const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: #491c53;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body
        className={`${jostSans.className}`}
      >
        <div id="splash-screen">
          <Image alt="logo-text" src={logo} style={{ height: '10%', width: 'auto' }} priority />
        </div>
        <div id="__next_splash">
          <AppProviders>
            {children}
            <Analytics />
          </AppProviders>
        </div>
      </body>
    </html>
  );
}
