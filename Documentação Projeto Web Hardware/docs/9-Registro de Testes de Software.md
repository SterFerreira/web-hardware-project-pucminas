# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

|Caso de Teste | CT-01 - Funcionamento dos popups|
|:--|:--|
|**Objetivo do teste**|Verificar o aparecimento, ordem e linkagem dos popups que guiam o usuário, assim como o salvamento de suas escolhas no localstorage.|
|**Resultado**|Funcionamento perfeito.|

|Caso de Teste | CT-02 - Recomendação de hardware|
|:--|:--|
|**Objetivo do teste**|Verificar a lógica de recomendações baseada no perfil do usuário.|
|**Resultado**|Funcionamento perfeito.|

|Caso de Teste | CT-03 - Explicação de componentes de hardware|
|:--|:--|
|**Objetivo do teste**|Verificar a presença e qualidade das páginas com explicações sobre hardware.|
|**Resultado**|Funcionamento perfeito.|

|Caso de Teste | CT-04 - Relatório com recomendação feita para o usuário|
|:--|:--|
|**Objetivo do teste**|Verificar a geração de relatório em formato PDF após o usuário ter acesso as recomendações de hardware personalizadas.|
|**Resultado**|Funcionamento mediano. A geração do PDF ocorre perfeitamente, mas ao fechar a janela, ele não retorna para a aba antiga automaticamente.|
|**Melhoria**|Voltar automaticamente para aba antiga ao fechar o janela do PDF.|

|Caso de Teste | CT-05 - Indicação de preços baixos|
|:--|:--|
|**Objetivo do teste**|Verificar se os botões "Comprar" para cada hardware recomendado levam para fornecedores com bons preços.|
|**Resultado**|Para as recomendações na escolha de 'upgrade', os botões funcionam perfeitamente, mas não há botões "Comprar" para as recomendação de computador 'novo'.|
|**Melhoria**|Adição dos botões 'Comprar' para as recomendações de 'novo'.|


|Caso de Teste | CT-06 - Fale conosco|
|:--|:--|
|**Objetivo do teste**|Verificar a presença de formulário para o usuário entrar em contato, de fácil acesso e com validações de campos.|
|**Resultado**|Funcionamento perfeito.|

## Avaliação

De forma geral, a aplicação atende seu propósito com a maioria das funcionalidades em perfeito funcionamento. Entretando, ainda há melhorias para serem feitas, muito embora não comprometam a funcionamento como um todo.