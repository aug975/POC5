// este arquivo gera o componente Topbar, que constroi o menu de navegacao da pagina

"use client"
import Link from "next/link"

// funcao que gera o componente
// cada Link leva para uma das paginas do site
function Topbar() {
  return (
    <div className="topbar">
      <Link href="/" className="botao">Home</Link>
		  <Link href="/cachorros" className="botao">Cachorros</Link>
      <Link href="/gatos" className="botao">Gatos</Link>
      <Link href="/raposas" className="botao">Raposas</Link>
    </div>
  );
}

export default Topbar;