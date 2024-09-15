"use client";

import localFont from "next/font/local";
import ConvexClientProvider from "./ConvexClientProvider";
import { MDBContainer } from "mdb-react-ui-kit";
import NavBar from "./components/NavBar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",

  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConvexClientProvider>
          <MDBContainer fluid>
          <NavBar/>
          </MDBContainer>
          {children}
        </ConvexClientProvider>

      </body>
    </html>
  );
}
