# POC 5: React
### Um código que demonstra a construção de um site ou projeto com ReactJS.

## Descrição
Este é um projeto em [ReactJS](https://react.dev/) que constrói um site de exibir imagens de cachorros, gatos e raposas.

### Estrutura do projeto
Há pastas e documentos necessários para o funcionamento do site na pasta exterior. A pasta .next, que só aparece quando o site é executado, contém os arquivos e módulos necessários para funcionamento do [Next.js](https://nextjs.org/docs), que é uma framework que traz vários elementos que facilitam o funcionamento do React e desenvolvimento com suas partes. A pasta node_modules, que é necessária mas deve ser criada com a execução de um comando específico, contém os pacotes de [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) utilizados no projeto. A pasta public contém arquivos gráficos utilizados pelo React. Os arquivos na pasta externa são utilizados pelo [ESLint](https://eslint.org/) contido no projeto, no processo de commit para o GitHub, pelo compilador, o Next, e também há os arquivos package que contém informações sobre o site e sua versão.

O projeto ou site em si está contido na pasta [src](/src) do repositório. Esta pasta contém todas as subpastas de estrutura do projeto. Dentro da pasta [app](/src/app) está o site em si, e na pasta [components](/src/components) está os componentes utilizados no projeto.

#### App
Em aplicativos padrões construídos desta forma, haverá 4 arquivos na pasta raíz app. 

Um deles será o arquivo [page.js](src/app/page.js), que contém o código que constrói a página principal ou home. page.js importa todos os elementos necessários e constrói o HTML no retorno de uma função que exporta a estrutura.

Outro arquivo será chamado [layout.js](src/app/layout.js), e contém o código universal de estrutura HTML que é aplicado a todas as páginas do site. Ele também contém as linhas de metadata do site. Todo o HTML construído nos arquivos page.js será inserido dentro da parte central do HTML universal deste arquivo, na seção de código {children}.
```javascript
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
```

Haverá dois arquivos de tipo CSS. Um deles, [globals.css](src/app/globals.css), contém o código CSS universal do site, que será aplicado a todas as páginas. Este arquivo é normalmente utilizado para criar as variáveis universais de CSS que serão utilizadas nas páginas.
O outro arquivo, [page.module.css](src/app/page.module.css), contém o CSS que será aplicado somente à página home.

>[!NOTE]
> Cada página adicional para qual se pode navegar no site é armazenada em uma nova pasta própria dentro da pasta app. De forma geral, cada uma destas subpastas irá conter um arquivo page.js, com o código JS/HTML individual da página, e um arquivo page.module.css, com o CSS individual da página, que tem prioridade sobre o CSS universal.

No aplicativo deste repositório em si temos 3 pastas, com 2 arquivos em cada, e 4 arquivos na pasta raiz. 

Cada pasta representa uma das 3 páginas adicionais para quais se pode navegar no site. Cada pasta de página possui um arquivo page.js, que contém o código que constrói a página, e o arquivo page.module.css, que contém o código CSS específico da página. Na [página de cachorros](/src/app/cachorros), por exemplo, page.js importa todos os elementos necessários e constrói o HTML no retorno de uma função que exporta a estrutura, e page.module.css contém o código CSS que aplica customização e estilo apenas a essa página. 

#### Componentes
Estes são arquivos .js ou .jsx que contém, em essência, seções de código que serão utilizadas repetidamente no projeto. Em vez de repetir o código cada vez, podemos condensar o código em um componente nestes arquivos. Assim, podemos importar e facilmente chamar os componentes quando necessário. Normalmente, para melhor organização, são colocados em uma subpasta própria na pasta src.

Nesta POC, temos três componentes: 

- O [footer](/src/components/footer.jsx), que constrói a seção informativa que fica na parte inferior direita da página.

- O header ou [topbar](/src/components/topbar.jsx), que constrói o menu com botões para navegar o site. 

- O componente chamado [ImgAnimal](/src/components/imganimal.jsx), que insere as imagens de animais no site.

Como são alguns são elementos utilizados várias vezes no código, e para manter simplicidade de estrutura, foram condensados em componentes para serem inseridos facilmente em cada página.

### Criando um componente
Para criar um componente que será utilizado no projeto, deve-se primeiro criar seu arquivo no diretório de componentes. Normalmente, este diretório components fica na pasta src, sendo uma subpasta irmã da subpasta app.

>[!NOTE]
> Normalmente, componentes em React possuem em seu código um pouco de JavaScript e um pouco de HTML interno no retorno da função de exportação. No entanto, essa combinação só funcionará totalmente se o arquivo for criado com uma extensão .jsx. A extensão normal de JS (.js) não suporta de forma geral o HTML interno utilizado em React. Portanto, criamos nosso arquivo com um nome do tipo "exemplo.jsx".

Para o código interno em si, há uma estrutura padrão para componentes em React.
```javascript
    "use client"
    function Componente() {
      return (
        
      );
    }
    export default Componente;
```
Introduzir o código com "use client" instrui nosso React a rodar o código no cliente acessando o servidor. Quando nosso código precisa de assistência server-side (e o servidor está configurado apropriadamente) podemos utilizar no lugar "use server". No entanto, isto normalmente não é necessário com componentes simples.

> [!WARNING]
> A linha "use client" sempre deve estar no topo do arquivo, na primeira linha, para que o interpretador saiba que todo o código deve ser executado daquela forma. Mesmo se houverem imports no código, este devem estar abaixo desta linha. Se esta instrução não for seguida, normalmente, o React/Next não irá compilar o código e retornará um build error. 

A função principal, a qual podemos dar qualquer nome apropriado, sempre terá uma seção de retorno (return) dentro da qual iremos incluir o HTML que queremos construir com esse componente. Por padrão, toda vez que o componente for referenciado, ele irá retornar a estrutura HTML dentro de sua seção return. Este retorno pode ser aninhado ou condicional, contanto que esteja na função.

Finalmente, é necessário marcar qual função do arquivo será exportada quando o componente for referenciado. O arquivo que criamos pode ter múltiplas funções, mas a função principal, que retorna a estrutura HTML que queremos exportar, deve ser marcada como a padrão com a linha "export default (nome da função)".

Um exemplo de componente é o [Topbar](#componentes) utilizado neste repositório.

```javascript
"use client"
import Link from "next/link"

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
```
A estrutura HTML dentro do retorno da função é construída na página toda vez que o componente é referenciado. 

Na função principal, podemos pedir parâmetros a serem incluidos quando o componente for referenciado. Para fazer isso, incluimos os nomes dos parâmetros dentro de chaves, nos parênteses da função principal. 
```javascript
function Componente({ parametro1, parametro2 }) {
```
#### Utilizando o componente
Podemos chamar componentes dentro dos arquivos de página (page.js) do nosso aplicativo. Primeiro, devemos importar o componente (com o nome da função que exportamos) no nosso código. Normalmente, utiliza-se o [diretório relativo](https://www.lenovo.com/us/en/glossary/relative-path/) e não o absoluto. 
```javascript
// Supondo que a funcao que exportamos se chamava Componente()
import Componente from '../components/componente';
```
Com o componente importado, simplesmente precisamos referenciar o componente com seu nome.
```javascript
import Component from '../components/component';

export default function Home() {
  return (
    <div>
      <Component/>
    </div>
  );
}
```
Com isso, o código que o componente retorna será inserido no local do código onde o referenciamos. Se nosso componente tem parâmetros, podemos incluir seus valores na referência.
```javascript
  return (
    <div>
      <Component parametro1="literalmente" parametro2="1984"/>
    </div>
  );
```
Um exemplo de uso de componente é na página de cachorros deste repositório.
```javascript
import Topbar from '../../components/topbar';
import ImgAnimal from '../../components/imganimal';

export default function Home() {
  return (
    <div>
      <div className="top">
        <img className="webgraphic" src="https://64.media.tumblr.com/f3dc9788318ee2e9d7f1d8403908903d/eca8b10a97918538-c7/s75x75_c1/7cf334441ebb7c65b39a3a9c7f0f8223dec8aad8.gifv"/>
        <h1 className="logo">Imagens de Cachorros</h1>
        <img className="webgraphic" src="https://64.media.tumblr.com/a4684f5a22ac0fc2eab4dc9caf7e72be/a53559b838a1040c-fa/s75x75_c1/a53b4d601b0667f42bad5dedc71123d8241df901.gifv"/>
      </div>
      <Topbar/>
      <ImgAnimal animal="cachorro"/>
      <ImgAnimal animal="cachorro" number="2"/>
      <ImgAnimal animal="cachorro" number="3"/>
    </div>
  );
}
```
Após a inclusão da div "top", referencia-se o componente Topbar e três componentes ImgAnimal, cada um com parâmetros diferentes. Na página, isso gera o menu de navegação e três imagens de cachorro, nesta ordem.

## Linguagem
Este projeto é um aplicativo ReactJS. Portanto, utiliza uma mistura de HTML e JavaScript, com arquivos de CSS. Há arquivos adicionais que utilizam JSON.

## Como executar
Para executar este código, utilize a opção do GitHub que permite baixar o repositório em um arquivo compactado .zip.

![Imagem mostrando onde está o botão](https://img001.prntscr.com/file/img001/Hxj8w1DnRRup_A-nl7s_4w.png)

Quando o arquivo estiver baixado, extraia seu conteúdo em uma nova pasta ou uma pasta vazia. Confira que todos os itens do repositório estão na pasta resultante.

> [!TIP]
> Extrair o arquivo em uma pasta vazia ou nova garante que nenhum arquivo exterior irá impedir a execução do código ou atrapalhar seu funcionamento

Primeiro, verifique se Node.js com o [npm](https://docs.npmjs.com/about-npm) está instalado em seu computador. Pode-se verificar isto abrindo o prompt de comando e executando "npm -v". Caso não esteja instalado, [há diversos processos simples para instalar os dois](https://nodejs.org/en/download/package-manager).

Segundo, verifique que seu npm está atualizado. Pode-se atualizar o npm executando "npm install -g npm" no prompt de comando.

Agora, precisamos instalar os módulos de node necessários. Para fazer isto, abra um terminal na pasta que contém a pasta src. O jeito mais simples de fazer isso em um sistema Windows é segurar Shift e clicar com o botão direito em uma área vazia da pasta, e selecionar "Abrir janela de comando aqui". Em outros sistemas, simplesmente abra um terminal e navegue para a pasta que contém a pasta src. Depois, execute o comando "npm install" e aguarde ter certeza que o processo está concluido. O npm irá instalar todos os módulos necessários para o projeto.

Com os módulos instalados, execute no mesmo terminal o comando "npm run dev", e aguarde o terminal comunicar "Ready in (tempo)ms". Agora, o site está hosteado em um host local. O terminal mostrará a URL na linha "- Local:   http://localhost:3000". Mantenha este terminal aberto e abra um navegador, acessando a URL informada. A página do navegador irá mostrar o site, e o terminal irá mostrar erros e retornos do React enquando se navega o site.

>[!NOTE]
> A execução de "npm run dev" deve ser feita em um terminal toda vez que se for acessar o aplicativo.
