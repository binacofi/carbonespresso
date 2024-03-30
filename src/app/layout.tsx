import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsappButton from "./components/whatsapp";

export const metadata: Metadata = {
  title: "Carbonespresso",
  description: "tu tienda de cafe especialidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-ngray">
      <Navbar/>
        {children}
      <WhatsappButton/>
      <Footer/>
      </body>
    </html>
  );
}
