# Estudos de Caso: Dados e Aprendizado

Este repositório reúne estudos de caso desenvolvidos para a aula de **Processamento de Dados Massivos e Módulos de Aprendizado**.

## Inventário de games

O script SQL apresenta a criação e o gerenciamento de uma tabela de inventário de games. A atividade demonstra:

- criação de tabela com identificador autoincrementável;
- inserção de dados de produtos;
- consulta dos registros cadastrados;
- identificação de itens com estoque crítico;
- filtragem de periféricos com preço acima de um determinado valor.

Arquivo: `inventario_games.sql`

## Perceptron da porta AND

O segundo estudo implementa um perceptron simples para aprender a porta lógica AND. A página HTML exibe o treinamento, o gráfico das previsões e a tabela de validação do modelo.

Arquivos:

- `perceptron_and.js`: implementação do treinamento e das previsões;
- `index.html`: interface visual com gráfico e resultados.

Para visualizar o experimento, abra o arquivo `index.html` em um navegador. Ao final do treinamento, as quatro combinações da porta AND são apresentadas com suas previsões e respectivos estados de validação.

## Objetivo

Aplicar conceitos de organização, armazenamento e consulta de dados, além de explorar o treinamento e a validação de um modelo básico de aprendizado de máquina em um cenário prático.