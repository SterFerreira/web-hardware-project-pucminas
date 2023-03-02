# Especificações do Projeto

<p align= "justify">Os pontos mais relevantes a serem tratados neste projeto foram abordados e exemplificados através de personas fictícias e suas respectivas histórias, expondo casos comuns dos problemas levantados na pesquisa, que foram elaborados a partir do conhecimento comum e vivência dos membros da equipe.</p>

## Personas

|<h3>**Fernanda**</h3> |  ||
| ------------------------------------------------------- | -------------------| ---------|
| <img src=img/personas/fernanda.jpg width="90">| **Idade:** 30 anos. | **Aplicativos:** Zoom, PowerPoint, Excel. |
**Motivação:**  Comprar um computador para poder ministrar aulas online.| **Frustrações:**  Pouco conhecimento para comprar um computador bom, com a garantia que irá funcionar adequadamente para  função desejada.  |  **História:** Fernanda é professora de cursos pré-vestibulares e quer comprar um notebook para poder ministrar aulas online e se beneficiar da portabilidade do aparelho. Ela é leiga na área da computação, mas quer ter uma experiência ágil com os programas que usa e não sofrer com travamentos e lentidões.
| |  |  |
|<h3>**Marcos**</h3> | | |
| <img src=img/personas/marcos.jpg width="90"> | **Idade:** 22 anos. | **Aplicativos:** Jogos eletrônicos e suas plataformas, Discord. |
|**Motivação:** Comprar um computador para jogos de alto desempenho.|**Frustrações:** Não tem conhecimento para montar sozinho um computador que lhe atenda.|**Historia:** Marcos tem como principal hobby jogos eletrônicos competitivos, e quer um computador que lhe permita aproveitar ao máximo seu entretenimento. |
| | | | 
| <h3>**Alexandre**</h3> | | |
| <img src=img/personas/alexandre.jpg width="90"> | **Idade:** 40 anos. | **Aplicativos:** Adobe Photoshop, Adobe Illustrator e Paint Tool Sai. |
|  **Motivação:** Trabalhar com diversos programas de edição de imagem simultâneamente, sem travamentos.| **Frustrações:** Quer adquirir melhorias para seu notebook atual mas teme problemas com compatibilidade.  | **História:** Alexandre tem 40 anos e é um designer gráfico experiente. Possui um notebook que é capaz de performar bem, porém com novas atualizações nos softwares que utiliza, vem sentindo engasgos e lentidões que prejudicam sua produtividade.
| | | |
| <h3>**Lucas**</h3>| | |
| <img src=img/personas/lucas.jpg width="90"> | **Idade:** 18 anos. | **Aplicativos:** Word, Excel, Powerpoint. |
|  **Motivação:** Acompanhar aulas da faculdade e usar o programas específicos de sua área de atuação.| **Frustrações:** Não sabe que tipo de computador necessita, pois antes do transição para aulas remotas usava os computadores da faculdade.|**Historia:** Lucas é universitário, e apesar de seu curso não estar diretamente relacionada à área da computação, ele está com dificuldades para realizar todas as atividades apenas com livros físicos e seu celular, e por isso quer um computador básico.|

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Fernanda | Receber indicação para comprar um computador baseado no meu perfil. | Economizar tempo ao adquirir um computador.
| Alexandre | Receber recomendações para melhorar o computador que já possuo. | Saber quais os componentes corretos para fazer um upgrade. |
| Marcos | Aprender sobre componentes de computadores. | Entender e saber escolher por mim mesmo qual hardware comprar. |
|Fernanda|De um relatório com os componentes selecionados.| Para salvar o resultado das recomendações e visualizar posteriormente.
|Marcos|Encontrar lojas com os melhores preços para o hardware escolhido.| Economizar ao adquirir novos produtos.
| Lucas | Acessar o site pelo celular. | Acessar as funcionalidades do site, ainda que sem possuir um computador. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site irá verificar o perfil e a necessidade do usuário para fornecer resultados personalizados. | ALTA | 
|RF-002| O site deve permitir o usuário informar o seu hardware para fornecer resultados personalizados. | ALTA |
|RF-003| O site deverá indicar componentes específicos e de boa qualidade para o usuário.| ALTA |
|RF-004 | O site deverá ter seções com explicações sobre hardware. | ALTA
|RF-005| O site irá criar relatórios para registrar o as recomendações personalizadas.| MÉDIA |
|RF-006| O site deverá indicar os fornecedores com menor preço para os itens selecionados. | BAIXA |
|RF-007 | O site deve fornecer o recurso "Fale Conosco" para possíveis duvidas e feedback. | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser compatível com os principais navegadores do mercado.| ALTA |
|RNF-002| O site ser simples para um usuário leigo. | ALTA |
|RNF-003| O site deve ser compatível com ambientes Mobile. | MÉDIA |

## Restrições

<p align= "justify">As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir</p>

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O projeto deverá ser feito somente com HTML, CSS e Javascript. Não poderá ser desenvolvido um módulo de backend ou uso de frameworks e bibliotecas. |
|03| Só poderá utilizar programas gratuitos ou fornecidos pela PUC Minas |