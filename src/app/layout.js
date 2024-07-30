import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Sheard/Header";
import Footer from "@/components/Sheard/Footer";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Service",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>
        <AuthProvider>
          <Header></Header>
          <div className="container mx-auto">{children}</div>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
