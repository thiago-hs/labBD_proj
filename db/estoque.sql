create database ESTOQUE;
  
USE ESTOQUE;

CREATE TABLE CATEGORIA (CodCategoria int(4) not null primary key,
						NomeCategoria varchar(40));
                          
CREATE TABLE PRODUTO (CodProduto int(5) not null, 
					  CodCategoria int(4) not null , 
					  CodFornecedor int(5) not null, 
					  Descricao varchar(40),
			          Peso double(3,2),
                      QntMin int(5));
                      
ALTER TABLE PRODUTO ADD CONSTRAINT PK_PRODUTO PRIMARY KEY (CodProduto);                      
ALTER TABLE PRODUTO ADD FOREIGN KEY (CodCategoria) REFERENCES CATEGORIA (CodCategoria);
ALTER TABLE PRODUTO ADD FOREIGN KEY (CodFornecedor) REFERENCES FORNECEDOR (CodFornecedor);                        

CREATE TABLE FORNECEDOR (CodFornecedor int(5) not null,
                         CodCidade int(4) not null,
					     NomeFornecedor varchar(30), 
				         Endereco varchar(50),
                         Bairro varchar (30),
                         CEP char(9),
                         Contato varchar(20),
                         CNPJ char(18),
                         Tel char(9));
                         
ALTER TABLE FORNECEDOR ADD CONSTRAINT PK_FORNECEDOR PRIMARY KEY (CodFornecedor);
ALTER TABLE FORNECEDOR ADD FOREIGN KEY (CodCidade) REFERENCES CIDADE (CodCidade);

CREATE TABLE CIDADE (CodCidade int(4),
					 Cidade varchar(20),
                     Uf char(2));

ALTER TABLE CIDADE ADD CONSTRAINT PK_CIDADE PRIMARY KEY (CodCidade);

CREATE TABLE ENTRADA (CodEntrada int(5),
					  CodTransportadora int(4),
                      DataPedido date,
                      DataEntrada date,
                      Total double(6,2),
                      NumNota int(5));

ALTER TABLE ENTRADA ADD CONSTRAINT PK_ENTRADA PRIMARY KEY (CodEntrada);
ALTER TABLE ENTRADA ADD FOREIGN KEY (CodTransportadora) REFERENCES TRANSPORTADORA (CodTransportadora);

CREATE TABLE TRANSPORTADORA (CodTransportadora int(4),
							 CodCidade int(4),
                             NomeTransport varchar(20),
                             Endereco varchar(50),
                             Contato varchar(20),
                             Tel varchar(9));
                             
ALTER TABLE TRANSPORTADORA ADD CONSTRAINT PK_TRANSPORTADORA PRIMARY KEY (CodTransportadora);
ALTER TABLE TRANSPORTADORA ADD FOREIGN KEY (CodCidade) REFERENCES CIDADE (CodCidade);

CREATE TABLE ITEMENTRADA (CodItemEntrada int(4) primary key not null,
                          CodProduto int(5),
                          CodEntrada int(5),
                          Quantidade int(4),
                          Valor double (6,2));

ALTER TABLE ITEMENTRADA ADD FOREIGN KEY (CodProduto) REFERENCES PRODUTO (CodProduto);
ALTER TABLE ITEMENTRADA ADD FOREIGN KEY (CodEntrada) REFERENCES ENTRADA (CodEntrada);                          
                      
CREATE TABLE SAIDA (CodSaida int(5) primary key not null,
                    CodLoja int(4),
                    CodTransportadora int(4),
                    Total double (6,2));

ALTER TABLE SAIDA ADD FOREIGN KEY (CodLoja) REFERENCES LOJA (CodLoja);
ALTER TABLE SAIDA ADD FOREIGN KEY (CodTransportadora) REFERENCES TRANSPORTADORA (CodTransportadora);

CREATE TABLE ITEMSAIDA (CodItemSaida int(5),
                        CodSaida int(5),
                        CodProduto int(5),
                        Quantidade int(4),
                        Valor double(6,2));
                        
ALTER TABLE ITEMSAIDA ADD FOREIGN KEY (CodSaida) REFERENCES SAIDA (CodSaida);
ALTER TABLE ITEMSAIDA ADD FOREIGN KEY (CodProduto) REFERENCES PRODUTO (CodProduto);

CREATE TABLE LOJA (CodLoja int(4) primary key not null,
                   CodCidade int(4),
                   NomeLoja varchar(20),
                   Endereco varchar(40),
                   Tel char(9));

ALTER TABLE LOJA ADD FOREIGN KEY (CodCidade) REFERENCES Cidade (CodCidade);


			
------------------------------------------------------------------------------
INSERT INTO CATEGORIA (CodCategoria,NomeCategoria) VALUES (1,'Carro');
INSERT INTO CATEGORIA (CodCategoria,NomeCategoria) VALUES (2,'Moto');
INSERT INTO CATEGORIA (CodCategoria,NomeCategoria) VALUES (3,'Caminhão');


INSERT INTO PRODUTO (CodProduto,CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (101,1,2222,'Rebinboca',2.0,5);
                     
INSERT INTO PRODUTO (CodProduto,CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (201,2,3333,'Biela',4.0,10);

INSERT INTO PRODUTO (CodProduto,CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (301,3,4444,'Ruela',20.5,15);
                     
INSERT INTO FORNECEDOR (CodFornecedor,CodCidade) VALUES(4444,11);
INSERT INTO FORNECEDOR (CodFornecedor,CodCidade) VALUES(5555,21);
INSERT INTO FORNECEDOR (CodFornecedor,CodCidade) VALUES(3333,31);
INSERT INTO FORNECEDOR (CodFornecedor,CodCidade) VALUES(2222,11);

insert into cidade (CodCidade,Cidade,UF) values (11,'São Paulo','SP');
insert into cidade (CodCidade,Cidade,UF) values (21,'Rio','RJ');
insert into cidade (CodCidade,Cidade,UF) values (31,'Minas','MG');

insert into entrada (CodEntrada,CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (2563,25,'2019-11-11','2019-11-12',120.00,8596); 
insert into entrada (CodEntrada,CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (6598,52,'2019-11-11','2019-11-13',2520.00,8563); 
insert into entrada (CodEntrada,CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (2763,75,'2019-11-11','2019-11-14',75.00,8597);                      
                     

insert into transportadora (CodTransportadora,CodCidade,NomeTransport) values (25,11,'Tartaruga');	
insert into transportadora (CodTransportadora,CodCidade,NomeTransport) values (52,21,'Barrichelos');
insert into transportadora (CodTransportadora,CodCidade,NomeTransport) values (75,31,'Pé de Breque');

insert into ITEMENTRADA (CodItemEntrada,CodProduto,CodEntrada,Quantidade,Valor) 
                         values (98,101,2563,5,256.00);
insert into ITEMENTRADA (CodItemEntrada,CodProduto,CodEntrada,Quantidade,Valor) 
                         values (52,201,6598,7,856.00);                         
insert into ITEMENTRADA (CodItemEntrada,CodProduto,CodEntrada,Quantidade,Valor) 
                         values (31,301,2763,8,1256.00);
                         
insert into loja (CodLoja,CodCidade,NomeLoja) values (63,11,'Casa Baiana');
insert into loja (CodLoja,CodCidade,NomeLoja) values (65,21,'Marabraz');
insert into loja (CodLoja,CodCidade,NomeLoja) values (64,31,'Havan');


