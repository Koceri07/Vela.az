import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";

export default function RootLayout({
  children,
  language = "az",
}: {
  children: React.ReactNode;
  language?: string;
}) {
  return (
    <html lang={language}>
      <body className="flex flex-col min-h-screen" cz-shortcut-listen="true">
        <LanguageProvider>
          <CartProvider>
            <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}