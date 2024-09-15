import localFont from "next/font/local";

import ConvexClientProvider from "./ConvexClientProvider";
import NavBar from "./_components/NavBar";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./globals.css";

const geistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",

  weight: "100 900",
});
const geistMono = localFont({
  src: "./_fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sustain.",
  description: "Sustainable alternatives to everyday products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/leaf-sustain.ico" sizes="any" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConvexClientProvider>
          <NavBar />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
