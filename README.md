# **README.TXT - DOCUMENTAÇÃO TOTEM CAFÉ SIENNA**





###### **CAFÉ SIENNA - TOTEM DE AUTOATENDIMENTO**

###### Este projeto consiste na criação de um protótipo funcional de um totem de autoatendimento desenvolvido para o Café Sienna. O objetivo principal é simular, de ponta a ponta, a experiência de compra em um totem digital similar aos encontrados em estabelecimentos de fast-food.

###### O sistema permite que o cliente navegue por um menu digital de cafés, pães e  sobremesas. Adicione os itens desejados a um carrinho de compras virtual e finalize o pedido. Este repositório serve como uma demonstração da integração entre as tecnologias fundamentais da web e o framework Bootstrap para construir interfaces de usuário interativas e dinâmicas.





##### **TECNOLOGIAS UTILIZADAS E ABORDAGEM TÉCNICA-**

###### O projeto foi construído utilizando o stack fundamental da web, complementado pelo framework Bootstrap para garantir agilidade no design e responsividade.



##### *Tecnologias Principais:*

* ###### HTML5: Utilizado para a estruturação semântica e a criação da base de todos os elementos da interface do usuário.



* ###### CSS3: Utilizado para personalização visual e ajustes finos de estilo que não foram cobertos pelo framework, ou então, com classes de estilização do próprio utilizadas no projeto.



* ###### JavaScript: Implementa toda a lógica de negócio do sistema, desde a gestão do menu até os cálculos financeiros e a manipulação das interações do usuário. Além do dinamismo de exibição em tela alcançado pelo DOM em JavaScript.



* ###### Bootstrap: Framework CSS utilizado para agilizar o desenvolvimento do layout, componentes de interface e garantir a responsividade da aplicação, adaptando-se a diferentes tamanhos de tela com responsividade (característica essencial para um totem).



#####   *Abordagem de Frontend:*

* ###### DOM (Document Object Model) Manipulation: A manipulação direta do DOM é o coração da interatividade do projeto. Ela é utilizada para criar e remover elementos dinamicamente (como adicionar uma linha ao carrinho), atualizar o conteúdo de texto (preços e totais) e reagir aos eventos de clique do usuário em tempo real, em tela, sem alterar estrutura interna. De forma rápida e facilmente reversível.



* ###### Persistência de Dados (localStorage): Para aprimorar a experiência do usuário, o carrinho de compras é salvo no armazenamento local do navegador (localStorage). Isso garante que, mesmo que o cliente feche a aba ou recarregue a página, o estado do carrinho (itens e quantidades) seja mantido de forma persistente.








##### **ESTRUTURA DO PROJETO-**

###### A organização dos arquivos segue uma estrutura padrão e clara, com uma separação lógica no JavaScript para otimizar a manutenção do código:



* ###### index.html: Ponto de entrada da aplicação, estrutura principal e links para Bootstrap.

###### 

* ###### cartão.html - Ao selecionar o pagamento em cartão, a interface do totem disponibiliza esta tela para inserção da senha.

###### 

* ###### dinheiro.html- Ao selecionar o pagamento em dinheiro, a interface do totem solicita que o dinheiro seja inserido.

###### 

* ###### inicio.html - Trata-se da tela inicial do Totem, mostrando a logo do café, e solicitando que um novo pedido seja realizado.

###### 

* ###### notaFiscal.html - Uma página que será exibida após alguma opção de pagamento ser escolhida, será exibido o pedido e o preço que o mesmo custou, simulando a saída de uma nota fiscal.

###### 

* ###### ondeComer.html - Após iniciar o atendimento pelo totem, a primeira página de escolha tem interface que pergunta se o cliente deseja consumir o pedido no local ou levar consigo. Estes detalhes irão para a cozinha, por exemplo.

###### 

* ###### pagamento.html - Após finalizar a seleção do pedido, o cliente verá esta página, sua interface oferece três formas de pagamento distintas: dinheiro, pix e cartão.

###### 

* ###### pix.html - Caso o pagamento escolhido pelo cliente for pix, este será redirecionado para esta página onde o QR Code para pagamento será exibido. Neste caso, para simulação do caminho que o cliente faria, colocamos em exibição um QR Code para o perfil de nossa sala na rede social Instagram.



* ###### confirmação.html - Antes de realizar o pagamento pelo método escolhido, será exibido para o cliente uma visualização final de seu carrinho e o resumo de seu pedido. Isto para que ele se certifique de que pegou os produtos que realmente desejava, e apenas depois disso, se dirigir para pagamento.html e a simulação da emissão de nota fiscal em notaFiscal.html.

------------------------------------------------------------------------------------------------------------------------------------------------------------



###### *Os arquivos abaixo estarão em uma pasta denominada Scripts.*

###### 

* ###### data.js: Script que simula o banco de dados dos produtos e suas informações.

###### 

* ###### totem.js: Script com as funcionalidades de tela e manipulação do DOM.



------------------------------------------------------------------------------------------------------------------------------------------------------------



###### *Os arquivos abaixo estarão em uma pasta denominadas styles.css:*

###### 

* ###### global.css - Estilização global da interface do projeto.

###### 

* ###### totem.css - Estilização de aspectos específicos da interface do totem alimentício.

------------------------------------------------------------------------------------------------------------------------------------------------------------

###### 

* ###### README.md: Documentação do projeto.



* ###### assets: Imagens utilizadas no projeto, como logo e as imagens dos produtos propriamente ditos. Arquivos de imagem realizados com o auxílio da ferramenta de design Figma.







##### **FUNCIONALIDADES DETALHADAS-**

###### O protótipo oferece um ciclo de compra completo através das seguintes funcionalidades:

###### 

###### *Exibição Dinâmica do Menu:* O menu de produtos é renderizado dinamicamente na tela. Cada item é exibido com seu nome, descrição detalhada, preço unitário e uma imagem representativa, utilizando os dados fornecidos pelo data.js.

###### 

###### *Adição Inteligente ao Carrinho:* Ao clicar no botão "Adicionar", o item é inserido no carrinho. Se o item já estiver presente, a função automaticamente incrementa apenas a quantidade, evitando a duplicação da listagem no carrinho.





##### *Gestão Completa do Carrinho:*



###### O painel do carrinho exibe claramente todos os produtos selecionados, suas quantidades, e o subtotal calculado para cada item individual.

###### 

###### *Controles de Quantidade:* Botões específicos permitem que o usuário aumente ou diminua a quantidade de um item.

###### 

###### *Remoção de Item:* Um botão de fácil acesso permite a remoção completa de um produto do carrinho.

###### 

###### *Cálculo Financeiro em Tempo Real:* Uma função de cálculo atualiza o valor total do pedido imediatamente após qualquer alteração (adição, remoção ou alteração de quantidade), garantindo precisão e transparência em tempo real.

###### 

###### *Confirmação e Finalização do Pedido:* Ao acionar o botão "Finalizar Pedido", o sistema exibe um resumo final em uma mensagem de confirmação, limpando o carrinho (tanto na interface quanto no armazenamento local) para o próximo ciclo de compra.






##### **COMO EXECUTAR A APLICAÇÃO LOCALMENTE-**

###### Para configurar e iniciar o protótipo do Totem Café Sienna em seu ambiente local, siga as instruções detalhadas abaixo:

###### 

###### Obtenção do Código-Fonte: Adquira os arquivos do projeto fazendo o download de um arquivo compactado ou realizando a clonagem do repositório. Todos os arquivos-fonte serão transferidos para sua máquina local.

###### (link do github se for fazer depois upload)

###### 

##### *Verificação da Estrutura:*

##### Navegue até o diretório onde os arquivos foram salvos. Confirme que todos os arquivos essenciais estão presentes para garantir o funcionamento correto. Observe a arquitetura do JavaScript:



* ###### index.html (Estrutura principal e referências ao Bootstrap, menu e produtos no geral) e as outras páginas html subsequentes a esta: cartão.html, dinheiro.html, inicio.html, notaFiscal.html, ondeComer.html , pagamento.html, pix.html e confirmação.html.

###### 

* ###### style.css (Estilos personalizados)

###### 

* ###### data.js (Simula um banco de dados, armazenando as informações sobre os produtos do café.)

###### 

* ###### totem.js (Contém a lógica da aplicação, responsável pelas funcionalidades em tela e a manipulação direta do DOM, manipulação em tela)



* ###### assets (Contém as imagens do projeto.)





##### **Inicialização no Navegador-**

###### Como a aplicação é estritamente front-end (HTML, CSS, JavaScript e Bootstrap), não é necessário um servidor local. Abra o arquivo index.html diretamente em qualquer navegador moderno de sua preferência (Google Chrome, Firefox, Edge, etc.). O arquivo index.html é o ponto de entrada principal, onde o menu completo com os produtos do Café Sienna será exibido.

###### 

###### *Teste Funcional e Interação:* Após o carregamento da interface, a aplicação estará pronta para ser testada. Siga estas etapas para simular um pedido completo:



###### *Navegue pelo Menu:* Examine os itens de café, pães e sobremesas dispostos na tela principal (index.html).



###### *Adicione ao Carrinho:* Clique no botão de adição de cada item desejado. Observe a atualização automática do carrinho, que demonstrará a funcionalidade do totem.js gerenciando o DOM.



###### *Gerencie o Pedido:* Teste as funcionalidades de aumentar/diminuir quantidades e remover itens para verificar se o cálculo do valor total é atualizado instantaneamente, refletindo a lógica de negócio do sistema.



###### *Finalize a Simulação:* Conclua a interação acionando o botão de Finalizar Pedido para ver a mensagem de confirmação e a limpeza do carrinho.





##### **CONCLUSÃO-**

###### O projeto CAFÉ SIENNA - Totem de Autoatendimento é uma demonstração sólida e satisfatória da aplicação de tecnologias front-end básicas, como HTML, CSS, JavaScript e Bootstrap, para resolver um problema de usabilidade no varejo. A arquitetura limpa, com a separação lógica de dados (data.js) e funcionalidades (totem.js), aliada à persistência do carrinho via localStorage, resulta em um protótipo satisfatório de alto nível. Este totem não apenas simula a experiência de compra de forma completa, mas também serve como uma prova de conceito eficaz de um sistema interativo, dinâmico e pronto para ser expandido em um ambiente de produção.

