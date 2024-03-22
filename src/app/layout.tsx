import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./storeProvider";

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
      <body className="bg-neutral-50">
      <StoreProvider>
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}
