// este arquivo gera o componente Footer, que mostra informacoes na parte inferior da pagina

// esta linha precisa ser inclusa para o componente funcionar
"use client"
// funcao que gera o componente
function Footer() {
  // no retorno da funcao esta o HTML que vai ser construido na pagina
    // este HTML inclui texto de informacoes de copyright
  return (
    <div className="footer">
      <b><em>Copyright© 2024 Augusto</em></b>
      <br></br>
      <em>Imagens pertencem aos donos originais na internet</em>
    </div>
  );
}

// linha que exporta o componente em si para ser referenciado quando importado
export default Footer;