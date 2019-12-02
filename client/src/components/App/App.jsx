import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Yup from 'yup';

import Nav from '../Nav/Nav.jsx';
import Table from '../Table/Table.jsx';
import Details from '../Details/Details.jsx';
import Delete from '../Delete/Delete.jsx';
import Insert from '../Insert/Insert.jsx';

function App() {
  let baseURL = 'http://localhost:3030';
  return (
    <BrowserRouter>
    <div className="App container border border-secondary rounded">
      <div className="row h-100">
        <div className="col-3 h-100 nav-container">
          <Nav />
        </div>
        <div className="col-9 h-100 main-container">
          <Switch>
            {/*PRODUTO*/}
            <Route exact key="produto-lista" path='/produtos'>
              {
                (props)=>(
                  <Table 
                    title='Produtos' 
                    baseURL={baseURL}
                    dataSrc='/api/produto' 
                    idProp='CodProduto' 
                    nameProp='Descricao'
                  />
                )
              }
            </Route>
            <Route exact key="produto-insert" path='/produtos/inserir'>
              {
                (props)=>(
                  <Insert 
                    title='Produtos' 
                    baseURL={baseURL}
                    dataSrc='/api/produto' 
                    idProp='CodProduto' 
                    nameProp='Descricao' 
                    indexURL="/produtos"
                    {...props} 
                    form={{
                      categoria:{
                        type:'select',
                        src: '/api/categoria',
                        idProp: 'CodCategoria',
                        titleProp: 'NomeCategoria'
                      },
                      fornecedor:{
                        type:'select',
                        src: '/api/fornecedor',
                        idProp: 'CodFornecedor',
                        titleProp: 'NomeFornecedor'
                      },
                      descricao:{type:'text'},
                      peso:{type:'number'},
                      qtdMin:{type:'number'}
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="produto-delete" path='/produtos/deletar/:id'>
              {
                (props)=>(
                  <Delete 
                    title='Produtos' 
                    baseURL={baseURL}
                    dataSrc='/api/produto' 
                    idProp='CodProduto' 
                    nameProp='Descricao' 
                    indexURL="/produtos"
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="produto-detalhes" path='/produtos/:id'>
              {
                (props)=>(
                  <Details 
                    title='Produtos' 
                    baseURL={baseURL}
                    dataSrc='/api/produto' 
                    idProp='CodProduto' 
                    nameProp='Descricao'
                  />
                )
              }
            </Route>
            {/*CATEGORIA*/}
            <Route exact key="categoria-lista" path='/categorias'>
              {
                (props)=>(
                  <Table 
                    title='Categorias' 
                    baseURL={baseURL}
                    dataSrc='/api/categoria' 
                    idProp='CodCategoria' 
                    nameProp='NomeCategoria'
                  />
                )
              }
            </Route>
            <Route exact key="categoria-insert" path='/categorias/inserir'>
            {
              (props)=>(
                <Insert 
                  title='Adicionar Categoria' 
                  baseURL={baseURL}
                  dataSrc='/api/categoria' 
                  idProp='CodCategoria' 
                  nameProp='NomeCategoria'
                  indexURL="/categorias" 
                  {...props}
                  form={{
                    nome: {type:'text'}
                  }}
                />
              )
            }
            </Route>
            <Route exact key="categoria-delete" path='/categorias/deletar/:id'>
            {
                (props)=>(
                  <Delete 
                    title='Categorias' 
                    baseURL={baseURL}
                    dataSrc='/api/categoria' 
                    idProp='CodCategoria' 
                    nameProp='NomeCategoria'
                    indexURL="/categorias" 
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="categoria-detalhes" path='/categorias/:id'>
              {
                (props)=>(
                  <Details 
                    title='Categorias' 
                    baseURL={baseURL}
                    dataSrc='/api/categoria' 
                    idProp='CodCategoria' 
                    nameProp='NomeCategoria'
                  />
                )
              }
            </Route>
            {/*CIDADE*/}
            <Route exact key="cidade-lista" path='/cidades'>
              {
                (props)=>(
                  <Table 
                    title='Cidades' 
                    baseURL={baseURL}
                    dataSrc='/api/cidade' 
                    idProp='CodCidade' 
                    nameProp='Cidade'
                  />
                )
              }
            </Route>
            <Route exact key="cidade-insert" path='/cidades/inserir'>
              {
                (props)=>(
                  <Insert 
                    title='Cidades'   
                    baseURL={baseURL}
                    dataSrc='/api/cidade' 
                    idProp='CodCidade' 
                    nameProp='Cidade'
                    indexURL="/cidades" 
                    {...props}
                    form={{
                      nome: {type:'text'},
                      uf: {type:'text'}
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="cidade-delete" path='/cidades/deletar/:id'>
              {
                (props)=>(
                  <Delete 
                    title='Cidades'   
                    baseURL={baseURL}
                    dataSrc='/api/cidade' 
                    idProp='CodCidade' 
                    nameProp='Cidade'
                    indexURL="/cidades" 
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="cidade-detalhes" path='/cidades/:id'>
              {
                (props)=>(
                  <Details 
                    title='Cidades'   
                    baseURL={baseURL}
                    dataSrc='/api/cidade' 
                    idProp='CodCidade' 
                    nameProp='Cidade'
                  />
                )
              }
            </Route>
            {/*FORNECEDOR*/}
            <Route exact key="fornecedor-lista" path='/fornecedores'>
              {
                (props)=>(
                  <Table 
                    title='Fornecedores' 
                    baseURL={baseURL}
                    dataSrc='/api/fornecedor' 
                    idProp='CodFornecedor' 
                    nameProp='NomeFornecedor'
                  />
                )
              }
            </Route>
            <Route exact key="fornecedor-insert" path='/fornecedores/inserir'>
              {
                (props)=>(
                  <Insert 
                    title='Fornecedores' 
                    baseURL={baseURL}
                    dataSrc='/api/fornecedor' 
                    idProp='CodFornecedor' 
                    nameProp='NomeFornecedor'
                    indexURL='/fornecedores' 
                    {...props} 
                    form={{
                      codCidade:{
                        type:'select',
                        src: '/api/cidade',
                        idProp: 'CodCidade',
                        titleProp: 'Cidade'
                      },
                      nome:{type:'text'},
                      endereco:{type:'text'},
                      bairro:{type:'text'},
                      cep:{type:'text'},
                      email:{type:'text'},
                      cnpj:{type:'text'},
                      tel:{type:'text'}
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="fornecedor-delete" path='/fornecedores/deletar/:id'>
              {
                (props)=>(
                  <Delete 
                    title='Fornecedores' 
                    baseURL={baseURL}
                    dataSrc='/api/fornecedor' 
                    idProp='CodFornecedor' 
                    nameProp='NomeFornecedor'
                    indexURL='/fornecedores' 
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="fornecedor-detalhes" path='/fornecedores/:id'>
              {
                (props)=>(
                  <Details 
                    title='Fornecedores' 
                    baseURL={baseURL}
                    dataSrc='/api/fornecedor' 
                    idProp='CodFornecedor' 
                    nameProp='NomeFornecedor'
                  />
                )
              }
            </Route>
            {/*TRANSPORTADORA*/}
            <Route exact key="transportadora-lista" path='/transportadoras'>
              {
                (props)=>(
                  <Table 
                    title='Transportadoras' 
                    baseURL={baseURL}
                    dataSrc='/api/transportadora' 
                    idProp='CodTransportadora' 
                    nameProp='NomeTransport'
                  />
                )
              }
            </Route>
            <Route exact key="transportadora-delete" path='/transportadoras/deletar/:id'>
              {
                (props)=>(
                  <Delete
                    title='Transportadoras' 
                    baseURL={baseURL}
                    dataSrc='/api/transportadora' 
                    idProp='CodTransportadora' 
                    nameProp='NomeTransport'
                    indexURL='/transportadoras' 
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="transportadora-insert" path='/transportadoras/inserir'>
              {
                (props)=>(
                  <Insert
                    title='Transportadoras' 
                    baseURL={baseURL}
                    dataSrc='/api/transportadora' 
                    idProp='CodTransportadora' 
                    nameProp='NomeTransport'
                    indexURL='/transportadoras' 
                    {...props} 
                    form={{
                      codCidade:{
                        type:'select',
                        src: '/api/cidade',
                        idProp: 'CodCidade',
                        titleProp: 'Cidade'
                      },
                      nome: {type: 'text'},
                      endereco: {type: 'text'},
                      contato: {type: 'text'},
                      tel: {type: 'text'}
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="transportadora-detalhes" path='/transportadoras/:id'>
              {
                (props)=>(
                  <Details 
                    title='Transportadoras' 
                    baseURL={baseURL}
                    dataSrc='/api/transportadora' 
                    idProp='CodTransportadora' 
                    nameProp='NomeTransport'
                  />
                )
              }
            </Route>
            {/*LOJA*/}
            <Route exact key="loja-lista" path='/lojas'>
              {
                (props)=>(
                  <Table 
                    title='Lojas' 
                    baseURL={baseURL}
                    dataSrc='/api/loja' 
                    idProp='CodLoja' 
                    nameProp='NomeLoja'
                  />
                )
              }
            </Route>
            <Route exact key="loja-insert" path='/lojas/inserir'>
              {
                (props)=>(
                  <Insert
                    title='Lojas' 
                    baseURL={baseURL}
                    dataSrc='/api/loja' 
                    idProp='CodLoja' 
                    nameProp='NomeLoja'
                    indexURL='/lojas' 
                    {...props} 
                    form={{
                      codCidade:{
                        type:'select',
                        src: '/api/cidade',
                        idProp: 'CodCidade',
                        titleProp: 'Cidade'
                      },
                      nome: {type: 'text'},
                      endereco: {type: 'text'},
                      tel: {type: 'text'}
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="loja-delete" path='/lojas/deletar/:id'>
              {
                (props)=>(
                  <Delete 
                    title='Lojas' 
                    baseURL={baseURL}
                    dataSrc='/api/loja' 
                    idProp='CodLoja' 
                    nameProp='NomeLoja'
                    indexURL='/lojas' 
                    {...props} 
                  />
                )
              }
            </Route>
            <Route exact key="loja-detalhes" path='/lojas/:id'>
              {
                (props)=>(
                  <Details 
                    title='Lojas' 
                    baseURL={baseURL}
                    dataSrc='/api/loja' 
                    idProp='CodLoja' 
                    nameProp='NomeLoja'
                  />
                )
              }
            </Route>
            {/*ENTRADA*/}
            <Route exact key="entrada-lista" path='/entradas'>
              {
                (props)=>(
                  <Table 
                    title='Entradas' 
                    baseURL={baseURL}
                    dataSrc='/api/entrada' 
                    idProp='CodEntrada' 
                    nameProp='DataEntrada'
                  />
                )
              }
            </Route>
            <Route exact key="entrada-insert" path='/entradas/inserir'>
              {
                (props)=>(
                  <Insert 
                    title='Entradas' 
                    baseURL={baseURL}
                    dataSrc='/api/entrada' 
                    idProp='CodEntrada' 
                    nameProp='DataEntrada'
                    indexURL='/entradas' 
                    {...props} 
                    form={{
                      codTransportadora:{
                        type:'select',
                        src: '/api/transportadora',
                        idProp: 'CodTransportadora',
                        titleProp: 'NomeTransport'
                      },
                      dataPedido: {type: 'date'},
                      dataEntrada: {type: 'date'},
                      total: {type: 'number'},
                      numNota: {type: 'number'},
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="entrada-delete" path='/entradas/deletar/:id'>
              {
                (props)=>(
                  <Delete 
                    title='Entradas' 
                    baseURL={baseURL}
                    dataSrc='/api/entrada' 
                    idProp='CodEntrada' 
                    nameProp='DataEntrada'
                    indexURL='/entradas' 
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="entrada-detalhes" path='/entradas/:id'>
              {
                (props)=>(
                  <Details 
                    title='Entradas' 
                    baseURL={baseURL}
                    dataSrc='/api/entrada' 
                    idProp='CodEntrada' 
                    nameProp='DataEntrada'
                  />
                )
              }
            </Route>
            {/*SAIDA*/}
            <Route exact key="saida-lista" path='/saidas'>
              {
                (props)=>(
                  <Table 
                    title='Saídas' 
                    baseURL={baseURL}
                    dataSrc='/api/saida' 
                    idProp='CodSaida' 
                    nameProp='NomeLoja'
                  />
                )
              }
            </Route>
            <Route exact key="saida-insert" path='/saidas/inserir'>
              {
                (props)=>(
                  <Insert 
                    title='Saídas' 
                    baseURL={baseURL}
                    dataSrc='/api/saida' 
                    idProp='CodSaida' 
                    nameProp='NomeLoja'  
                    indexURL='/saidas' 
                    {...props} 
                    form={{
                      codLoja:{
                        type:'select',
                        src: '/api/loja',
                        idProp: 'CodLoja',
                        titleProp: 'NomeLoja'
                      },
                      codTransportadora:{
                        type:'select',
                        src: '/api/transportadora',
                        idProp: 'CodTransportadora',
                        titleProp: 'NomeTransport'
                      },
                      total: {type: 'number'}
                    }}
                  />
                )
              }
            </Route>
            <Route exact key="saida-delete" path='/saidas/deletar/:id'>
              {
                (props)=>(
                  <Delete  
                    title='Saídas' 
                    baseURL={baseURL}
                    dataSrc='/api/saida' 
                    idProp='CodSaida' 
                    nameProp='NomeLoja'  
                    indexURL='/saidas' 
                    {...props}
                  />
                )
              }
            </Route>
            <Route exact key="saida-detalhes" path='/saidas/:id'>
              {
                (props)=>(
                  <Details 
                    title='Saídas' 
                    baseURL={baseURL}
                    dataSrc='/api/saida' 
                    idProp='CodSaida' 
                    nameProp='NomeLoja'
                  />
                )
              }
            </Route>
          </Switch> 
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
