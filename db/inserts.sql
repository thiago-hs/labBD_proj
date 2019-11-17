INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Carro');
INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Moto');
INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Caminhão');

insert into CIDADE (Cidade,UF) values ('São Paulo','SP');
insert into CIDADE (Cidade,UF) values ('Rio','RJ');
insert into CIDADE (Cidade,UF) values ('Minas','MG');

INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Contato,CNPJ,Tel) 
    VALUES(1,'SMART LOG','R. Macieiras, 254','Vila Prudente','26292-201','sac@smartlog.com.br','19.262.139/0001-31','5814-4531');
INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Contato,CNPJ,Tel) 
    VALUES(2,'CASTRO LOG','R. Banareiras, 255','L','26292-201','sac@smartlog.com.br','19.262.139/0001-31','5814-4531');
INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Contato,CNPJ,Tel) 
    VALUES(3,'SMART LOG','R. Macieiras, 254','Vila Prudente','26292-201','sac@smartlog.com.br','19.262.139/0001-31','5814-4531');


INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (1,2,'Rebinboca',2.0,5);
                     
INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (1,2,'Rebinboca',2.0,5);

INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (1,2,'Rebinboca',2.0,5);
                     


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


