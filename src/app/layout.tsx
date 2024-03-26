import type { Metadata } from "next";
import "./globals.css";

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
      <body className="">
        {children}
        <style>{`
        body {
          background-color: #eeeeee;
        }
        `}
      </style>
      </body>
    </html>
  );
}
