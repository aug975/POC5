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

Outro arquivo será chamado [layout.js](src/app/layout.js), e contém o código universal de estrutura HTML que é aplicado a todas as páginas do site. Ele também contém as linhas de metadata do site. Todo o HTML construído nos arquivos page.js será inserido dentro da parte central do HTML universal deste arquivo, na seção de código [{children}](https://github.com/aug975/POC5/blob/6960470ebe832662c98ec663598ffada2af25ec3/src/app/layout.js#L20).

Haverá dois arquivos de tipo CSS. Um deles, [globals.css](src/app/globals.css), contém o código CSS universal do site, que será aplicado a todas as páginas. Este arquivo é normalmente utilizado para criar as variáveis universais de CSS que serão utilizadas nas páginas.
O outro arquivo, [page.module.css](src/app/page.module.css)
No aplicativo em si temos 3 pastas, com 2 arquivos em cada, e 4 arquivos na pasta raiz. 

Cada pasta representa uma das 3 páginas adicionais para quais se pode navegar no site. Cada pasta de página possui um arquivo page.js, que contém o código que constrói a página, e o arquivo page.module.css, que contém o código CSS específico da página. Na [página de cachorros](/src/app/cachorros), por exemplo, page.js importa todos os elementos necessários e constrói o HTML no retorno de uma função que exporta a estrutura, e page.module.css contém o código CSS que aplica customização e estilo apenas a essa página. 

#### Componentes
Estes são arquivos .js ou .jsx que contém, em essência, seções de código que serão utilizadas repetidamente no projeto. Em vez de repetir o código cada vez, podemos condensar o código em um componente nestes arquivos. Assim, podemos importar e facilmente chamar os componentes quando necessário. Estes arquivos podem ser mantidos em qualquer pasta estrutural do projeto, mas para melhor organização foram colocados em uma subpasta própria na pasta src.

Nesta POC, temos três componentes. O [footer](/src/components/footer.jsx), que constrói a seção informativa que fica na parte inferior direita da página, o header ou [topbar](/src/components/topbar.jsx), que constrói o menu com botões para navegar o site, e o componente chamado [ImgAnimal](/src/components/imganimal.jsx), que insere as imagens de animais no site.
Como são elementos utilizados várias vezes no código, foram condensados em componentes para serem inseridos facilmente em cada página.
