import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Loja Next",
  description: "Exercício de rotas com o App Router do Next.js",
};

// O layout envolve todas as páginas, por isso a Navbar aparece em todas elas
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
