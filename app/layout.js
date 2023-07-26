import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "reembsrat",
  description: "My dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
