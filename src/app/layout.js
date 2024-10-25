// este arquivo gera a informacao e estrutura universal das paginas do site inteiro

import "./globals.css";
import Footer from "../components/footer"

// metadata para informacao do site
export const metadata = {
  title: "Imagens de Animais",
  description: "Meu site de animais",
};

// funcao que exporta o layout raiz do projeto
  // como o componente <Footer/> esta sendo utilizado em todas as paginas, esta incluso no layout raiz
  // a <section> de imagens tambem esta presente em todas as paginas, entao tambem foi inclusa na raiz
  // com isso, ambos estarao universalmente em todas as paginas do projeto
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <section id="images"></section>
        <Footer/>
      </body>
    </html>
  );
}
