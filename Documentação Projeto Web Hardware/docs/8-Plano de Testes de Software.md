# Plano de Testes de Software

Está seção detalha o planejamentos do processo de realização dos Testes de Software.

|Caso de Teste | CT-01 - Funcionamento dos popups|
|:--|:--|
|**Requisitos Associados**|RF-001 - O site irá verificar o perfil e a necessidade do usuário para fornecer resultados personalizados. <br/> RF-002 - O site deve permitir o usuário informar o seu hardware para fornecer resultados personalizados.|
|**Objetivo do teste**|Verificar o aparecimento, ordem e linkagem dos popups que guiam o usuário, assim como o salvamento de suas escolhas no localstorage.|
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - Esperar o popup automático ou clicar em "DEIXE QUE NÓS ESCOLHEMOS POR VOCÊ! CLIQUE AQUI PARA COMEÇAR!" e seleciona as opções interativas.|
|**Critérios de Êxito**|Popups aparecerem na ordem correta e opções salvas no localstorage.|

|Caso de Teste | CT-02 - Recomendação de hardware|
|:--|:--|
|**Requisitos Associados**|RF-003 - O site deverá indicar componentes especifico e de boa qualidade para o usuário.
|**Objetivo do teste**|Verificar a lógica de recomendações baseada no perfil do usuário.|
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - Escolher uma opção no último popup e aguardar ser redirecionada para a página de recomendações.|
|**Critérios de Êxito**|Gerar recomendações coerentes a partir das escolhas do usuário.|

|Caso de Teste | CT-03 - Explicação de componentes de hardware|
|:--|:--|
|**Requisitos Associados**|RF-004 - O site deverá ter seções com explicações sobre hardware.
|**Objetivo do teste**|Verificar a presença e qualidade das páginas com explicações sobre hardware.|
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - No menu principal, clicar em "Hardware". <br/>4 - Aguardar a página carregar.|
|**Critérios de Êxito**|Seção de fácil acesso, abordando os componentes relevantes e explicando de forma clara.|

|Caso de Teste | CT-04 - Relatório com recomendação feita para o usuário|
|:--|:--|
|**Requisitos Associados**|RF-005 - O site irá criar relatórios para registrar o as recomendações personalizadas.
|**Objetivo do teste**|Verificar a geração de relatório em formato PDF após o usuário ter acesso as recomendações de hardware personalizadas.|
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - Escolher opção de cada popup até o final, aguardar ser redionado para a página de recomendações, clicar no botão para gerar PDF. <br/> 4 - Aguardar a prévia do arquivo PDF aparecer.|
|**Critérios de Êxito**|Possibilitar o salvamento de um arquivo no formato PDF com a recomendação gerada para o usuário.|

|Caso de Teste | CT-05 - Indicação de preços baixos|
|:--|:--|
|**Requisitos Associados**|RF-006 - O site deverá indicar os fornecedores com menor preço para os itens selecionados.
|**Objetivo do teste**|Verificar se os botões "Comprar" para cada hardware recomendado levam para fornecedores com bons preços.|
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - Escolher uma opção no último popup e aguardar ser redirecionada para a página de recomendações.<br/>4 - Clicar em "Comprar" e esperar ser redirecionado para fornecedores com bons preços.|
|**Critérios de Êxito**|Ser redirecionado para fornecedores com bons preços sobre o componente de hardware selecionado.|

|Caso de Teste | CT-06 - Fale conosco|
|:--|:--|
|**Requisitos Associados**|RF-007 - O site deve fornecer o recurso "Fale Conosco" para possíveis duvidas e feedback.
|**Objetivo do teste**|Verificar a presença de formulário para o usuário entrar em contato, de fácil acesso e com validações de campos.|
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - No menu principal, clicar em "Sobre". <br/>4 - Aguardar a página carregar.<br/>5 - Digitar dados e mensagem no formulário à direita da página.|
|**Critérios de Êxito**|Formulário com campos para identificar o usuário e para digitar uma mensagem, com validações caso algum campo de identificação esteja vazio.|
