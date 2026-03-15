import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className="flex flex-col min-h-screen" 
          cz-shortcut-listen="true">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}