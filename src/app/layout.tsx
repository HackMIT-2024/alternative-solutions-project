import localFont from "next/font/local";
import ConvexClientProvider from "./ConvexClientProvider";
import NavBar from "./components/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
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
      <link rel="icon" href="/favicon-new.ico" sizes="any" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConvexClientProvider>
          <NavBar isLoading />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
