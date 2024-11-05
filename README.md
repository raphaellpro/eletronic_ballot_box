Aqui está um exemplo de README para o projeto da urna eletrônica.

---

# Urna Eletrônica Brasileira Simulada

Este é um projeto de simulação de uma urna eletrônica brasileira, desenvolvido com HTML, CSS e JavaScript. A urna permite ao usuário votar em dois candidatos fictícios, "Kamala Harris" (número 13) e "Donald Trump" (número 22), além de opções para voto em branco e correção do voto. Cada voto é armazenado em `localStorage`, e o resultado da votação é exibido a cada novo voto confirmado.

## Funcionalidades

- **Teclado Numérico:** O usuário pode inserir um número de candidato utilizando os botões de 0 a 9.
- **Botões de Ação:** Botões para "Branco", "Corrige" e "Confirma".
- **Exibição do Candidato:** Exibe a foto e o nome do candidato ao inserir o número correspondente.
- **Voto em Branco:** Permite ao usuário votar em branco.
- **Correção de Voto:** Limpa o campo de entrada para que o usuário possa corrigir seu voto.
- **Armazenamento de Votos:** Os votos são armazenados no `localStorage` do navegador.
- **Exibição de Resultados:** Exibe o total de votos para cada candidato e votos em branco a cada voto confirmado.

## Estrutura de Arquivos

- **index.html**: Estrutura HTML da urna.
- **style.css**: Estilos CSS para a interface da urna (integrados diretamente no HTML).
- **script.js**: Lógica JavaScript para o funcionamento da urna (também integrados diretamente no HTML).
- **Imagens**: Inclui as imagens dos candidatos e uma imagem padrão inicial (eua.png).

## Como Utilizar

1. **Clone o Repositório**: Baixe o código deste repositório.
2. **Estrutura de Imagens**: Insira as seguintes imagens no diretório do projeto:
   - `eua.png`: Imagem inicial a ser exibida na urna.
   - `kamala.jpg`: Foto de Kamala Harris.
   - `trump.jpg`: Foto de Donald Trump.
3. **Execute o Projeto**: Abra o arquivo `index.html` no navegador.

## Passo a Passo para Votação

1. **Insira o Número do Candidato**: Use o teclado numérico na urna para digitar o número de um candidato:
   - **13** para **Kamala Harris**
   - **22** para **Donald Trump**
2. **Confirme o Voto**: 
   - Se o número digitado for válido, a urna exibirá a foto e o nome do candidato ao lado esquerdo.
   - Caso o número não corresponda a um candidato, a imagem inicial (`eua.png`) será exibida.
3. **Ações Disponíveis**:
   - **Branco**: Vota em branco, ignorando o número digitado.
   - **Corrige**: Limpa o número digitado, permitindo corrigir o voto.
   - **Confirma**: Confirma o voto e armazena-o em `localStorage`.
4. **Exibição de Resultados**: Após confirmar o voto, um alerta exibirá o total atualizado de votos para cada candidato, além dos votos em branco.

## Lógica do Código

- **JavaScript**: A lógica de votação é controlada por funções JavaScript.
   - `addNumber(num)`: Adiciona o número digitado ao campo de entrada.
   - `showCandidate()`: Exibe a foto e o nome do candidato se o número digitado corresponder a um candidato.
   - `voteBlank()`: Registra um voto em branco.
   - `correct()`: Limpa o número digitado para correção.
   - `confirm()`: Confirma o voto, salva-o no `localStorage`, limpa o campo e exibe os resultados atualizados.
   - `displayResults(votes)`: Mostra o total de votos para cada candidato e votos em branco.

## Exemplo de Uso e Resultados

A cada voto confirmado, o usuário verá um alerta com a contagem de votos para:
- **Kamala Harris**
- **Donald Trump**
- **Votos em Branco**

## Melhorias Futuras

- Implementação de uma interface para reiniciar a votação e limpar o `localStorage`.
- Aperfeiçoar a interface para simular mais fielmente a urna brasileira.
  
## Captura de Tela

Inserir uma captura de tela do projeto aqui, com as imagens dos candidatos e o teclado da urna.

## Licença

Este projeto é desenvolvido para fins educacionais e simulação.