# Projeto Laboratório de Banco de Dados

Esse projeto visa a criação de um sisteminha web utilizando as 3 camadas(front,back e bd).

As tecnologias utilizadas são: React no front, node no back e mySql no banco.

## Estrutura de pastas
* **server/** : Contém a módulo que inicia o servidor.
* **db/** : Contém um script SQL para gerar um banco com dados iniciais.
* **client/** : Contém todo o código da aplicação front-end.

### Checklist do trabalho 

- [x] INSERT
- [x] DELETE
- [x] UPDATE
- [x] CONSULTA
- [ ] RELATÓRIO
- [x] CHAMADA DE STORED PROCEDURE

### BD Schema
![Image of Data Base Schema Diagram](https://raw.githubusercontent.com/thiago-hs/labBD_proj/master/SCHEMA.png)


### API

* [x] **/api/categoria** (GET,POST)
* [x] **/api/categoria/`<id>`** (GET,PUT,DELETE)

* [x] **/api/produto** (GET,POST)
* [x] **/api/produto/`<id>`** (GET,PUT,DELETE)

* [x] **/api/entrada** (GET,POST)
* [x] **/api/entrada/`<id>`** (GET,PUT,DELETE)
* [x] **/api/entrada/`<productId>`** (GET)

* [x] **/api/saida** (GET,POST)
* [x] **/api/saida/`<id>`** (GET,PUT,DELETE)
* [x] **/api/saida/`<productId>`** (GET)

* [x] **/api/fornedor** (GET,POST)
* [x] **/api/fornedor/`<id>`** (GET,PUT,DELETE)

* [x] **/api/transportadora** (GET,POST)
* [x] **/api/transportadora/`<id>`** (GET,PUT,DELETE)

* [x] **/api/loja** (GET,POST)
* [x] **/api/loja/`<id>`** (GET,PUT,DELETE)

* [x] **/api/cidade** (GET,POST)
* [x] **/api/cidade/`<id>`** (GET,PUT,DELETE)

> Todos os GET terão todas as propriedades previstas no banco, em caso de um id específico apenas o registro dessa chave será retornado, caso contrário todos registros devem ser retornados, em caso de alguma propriedade ser um chave estranjeira o nome da referência também tem que ser fornecido; os POST receberão todos os propriedades previstas no banco menos a chave primária; os PUT receberão o objeto completo com os dados que já existiam mais o(s) dado(s) que foi alterado, tudo no mesmo objeto; já os DELETE apenas receberão o id da entidade.
