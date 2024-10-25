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

A função principal, a qual podemos dar qualquer nome apropriado, sempre terá uma seção de retorno (return) dentro da qual iremos incluir o HTML que queremos construir com esse componente. Por padrão, toda vez que o componente for referenciado, ele irá retornar a estrutura HTML dentro de sua seção return. Este retorno pode ser aninhado ou condicional, contanto que esteja na função.

Finalmente, é necessário marcar qual função do arquivo será exportada quando o componente for referenciado. O arquivo que criamos pode ter múltiplas funções, mas a função principal, que retorna a estrutura HTML que queremos exportar, deve ser marcada como a padrão com a linha "export default (nome da função)".

Um exemplo de componente é o [Topbar](https://github.com/aug975/POC5/tree/main?tab=readme-ov-file#componentes) utilizado neste repositório.
