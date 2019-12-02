USE ESTOQUE;

INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Carro');
INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Moto');
INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Caminhão');
INSERT INTO CATEGORIA (NomeCategoria) VALUES ('Onibus');

insert into CIDADE (Cidade,UF) values ('São Paulo','SP');
insert into CIDADE (Cidade,UF) values ('Rio','RJ');
insert into CIDADE (Cidade,UF) values ('Minas','MG');
insert into CIDADE (Cidade,UF) values ('Curitiba','PR');


INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Email,CNPJ,Tel) 
    VALUES(1,'SMART LOG','R. Macieiras, 254','Vila Prudente','26292-201','sac@smartlog.com.br','19.262.139/0001-31','5814-4531');
INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Email,CNPJ,Tel) 
    VALUES(2,'CASTRO LOG','R. Vergueiro','Liberdade','26292-201','sac@castrolog.com.br','25.365.123/0001-31','2596-4531');
INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Email,CNPJ,Tel) 
    VALUES(3,'Best','R. Prata, 254','Itaquera','26292-201','sac@best.com.br','32.262.139/0001-31','2314-4531');
INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Email,CNPJ,Tel) 
    VALUES(4,'Worst','R. Bronza, 2','São Miguel','26292-201','sac@worst.com.br','92.262.139/0001-31','2314-4531');


INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (1,1,'Vela',2.0,35);
                     
INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (3,2,'Biela',3.0,52);

INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (2,3,'Rebinboca',1.0,14);
                     
INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin)
                     VALUES (4,4,'Parafuseta',5.0,9);                     

insert into transportadora (CodCidade,NomeTransport) values (1,'Tartaruga');	
insert into transportadora (CodCidade,NomeTransport) values (2,'Barrichelos');
insert into transportadora (CodCidade,NomeTransport) values (3,'Pé de Breque');
insert into transportadora (CodCidade,NomeTransport) values (4,'Roda Presa');


insert into entrada (CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (1,'2019-11-10','2019-11-12',1120.00,8596); 
insert into entrada (CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (2,'2019-03-11','2019-11-13',2520.00,8563); 
insert into entrada (CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (3,'2019-11-12','2019-11-14',75.00,8597);   
insert into entrada (CodTransportadora,DataPedido,DataEntrada,Total,NumNota) 
                     values (4,'2019-08-09','2019-11-14',95.00,8597);  
                     

insert into loja (CodCidade,NomeLoja) values (1,'Casa Bahia');
insert into loja (CodCidade,NomeLoja) values (2,'Marabraz');
insert into loja (CodCidade,NomeLoja) values (3,'Havan');
insert into loja (CodCidade,NomeLoja) values (4,'Magazine');


insert into ITEMENTRADA (CodProduto,CodEntrada,Quantidade,Valor) 
                         values (1,2,52,368.00);
insert into ITEMENTRADA (CodProduto,CodEntrada,Quantidade,Valor) 
                         values (2,3,10,256.00);
insert into ITEMENTRADA (CodProduto,CodEntrada,Quantidade,Valor) 
                         values (3,4,235,856.00);                         
insert into ITEMENTRADA (CodProduto,CodEntrada,Quantidade,Valor) 
                         values (4,1,82,1256.00);
                         

insert into saida  (CodLoja,CodTransportadora,Total) values (1,1,4000.00);
insert into saida  (CodLoja,CodTransportadora,Total) values (2,3,1000.00);
insert into saida  (CodLoja,CodTransportadora,Total) values (3,2,1500.00); 
insert into saida  (CodLoja,CodTransportadora,Total) values (4,4,9600.00); 


insert into itemsaida(CodSaida,CodProduto,Quantidade)values (2,1,13);
insert into itemsaida(CodSaida,CodProduto,Quantidade)values (3,3,25);
insert into itemsaida(CodSaida,CodProduto,Quantidade)values (1,2,96);
insert into itemsaida(CodSaida,CodProduto,Quantidade)values (4,4,17);