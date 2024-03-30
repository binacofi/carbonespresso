import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

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
      <Navbar/>
      <body className="bg-ngray">
        {children}
      </body>
    </html>
  );
}
