CREATE DATABASE ESTOQUE;
  
USE ESTOQUE;

CREATE TABLE CATEGORIA (CodCategoria int,
		                NomeCategoria varchar(40));                    
ALTER TABLE CATEGORIA ADD CONSTRAINT PK_CATEGORIA PRIMARY KEY (CodCategoria);
ALTER TABLE CATEGORIA MODIFY COLUMN CodCategoria INT NOT NULL AUTO_INCREMENT;

CREATE TABLE CIDADE (CodCidade int,
					 Cidade varchar(20),
                     Uf char(2));
ALTER TABLE CIDADE ADD CONSTRAINT PK_CIDADE PRIMARY KEY (CodCidade);
ALTER TABLE CIDADE MODIFY COLUMN CodCidade INT NOT NULL AUTO_INCREMENT;

CREATE TABLE FORNECEDOR (CodFornecedor int,
                         CodCidade int(4) not null,
					     NomeFornecedor varchar(30), 
				         Endereco varchar(50),
                         Bairro varchar (30),
                         CEP char(9),
                         Email varchar(20),
                         CNPJ char(18),
                         Tel char(9));
ALTER TABLE FORNECEDOR ADD CONSTRAINT PK_FORNECEDOR PRIMARY KEY (CodFornecedor);
ALTER TABLE FORNECEDOR ADD FOREIGN KEY (CodCidade) REFERENCES CIDADE (CodCidade) ON DELETE CASCADE;
ALTER TABLE FORNECEDOR MODIFY COLUMN CodFornecedor INT NOT NULL AUTO_INCREMENT;

CREATE TABLE PRODUTO (CodProduto int(5), 
					  CodCategoria int(4) not null , 
					  CodFornecedor int(5) not null, 
					  Descricao varchar(40),
			          Peso double(3,2),
                      CreateTime DATETIME,
                      QntMin int(5));
ALTER TABLE PRODUTO ADD CONSTRAINT PK_PRODUTO PRIMARY KEY (CodProduto);                      
ALTER TABLE PRODUTO ADD FOREIGN KEY (CodCategoria) REFERENCES CATEGORIA (CodCategoria) ON DELETE CASCADE;
ALTER TABLE PRODUTO ADD FOREIGN KEY (CodFornecedor) REFERENCES FORNECEDOR (CodFornecedor) ON DELETE CASCADE;                        
ALTER TABLE PRODUTO MODIFY COLUMN CodProduto INT NOT NULL AUTO_INCREMENT;

CREATE TABLE TRANSPORTADORA (CodTransportadora int,
							 CodCidade int(4),
                             NomeTransport varchar(20),
                             Endereco varchar(50),
                             Contato varchar(20),
                             Tel varchar(9));
ALTER TABLE TRANSPORTADORA ADD CONSTRAINT PK_TRANSPORTADORA PRIMARY KEY (CodTransportadora);
ALTER TABLE TRANSPORTADORA ADD FOREIGN KEY (CodCidade) REFERENCES CIDADE (CodCidade) ON DELETE CASCADE;
ALTER TABLE TRANSPORTADORA MODIFY COLUMN CodTransportadora INT NOT NULL AUTO_INCREMENT;

CREATE TABLE ENTRADA (CodEntrada int,
					  CodTransportadora int(4),
                      DataPedido date,
                      DataEntrada date,
                      Total double(6,2),
                      NumNota int(5));
ALTER TABLE ENTRADA ADD CONSTRAINT PK_ENTRADA PRIMARY KEY (CodEntrada);
ALTER TABLE ENTRADA ADD FOREIGN KEY (CodTransportadora) REFERENCES TRANSPORTADORA (CodTransportadora) ON DELETE CASCADE;
ALTER TABLE ENTRADA MODIFY COLUMN CodEntrada INT NOT NULL AUTO_INCREMENT;

CREATE TABLE ITEMENTRADA (CodItemEntrada int,
                          CodProduto int(5),
                          CodEntrada int(5),
                          Quantidade int(4),
                          Valor double (6,2));
ALTER TABLE ITEMENTRADA ADD CONSTRAINT PK_ITEMENTRADA PRIMARY KEY (CodItemEntrada);
ALTER TABLE ITEMENTRADA ADD FOREIGN KEY (CodProduto) REFERENCES PRODUTO (CodProduto) ON DELETE CASCADE;
ALTER TABLE ITEMENTRADA ADD FOREIGN KEY (CodEntrada) REFERENCES ENTRADA (CodEntrada) ON DELETE CASCADE;                          
ALTER TABLE ITEMENTRADA MODIFY COLUMN CodItemEntrada INT NOT NULL AUTO_INCREMENT;

CREATE TABLE LOJA (CodLoja int,
                   CodCidade int(4),
                   NomeLoja varchar(20),
                   Endereco varchar(40),
                   Tel char(9));
ALTER TABLE LOJA ADD CONSTRAINT PK_LOJA PRIMARY KEY (CodLoja);
ALTER TABLE LOJA ADD FOREIGN KEY (CodCidade) REFERENCES Cidade (CodCidade) ON DELETE CASCADE;                   
ALTER TABLE LOJA MODIFY COLUMN CodLoja INT NOT NULL AUTO_INCREMENT;

CREATE TABLE SAIDA (CodSaida int,
                    CodLoja int(4),
                    CodTransportadora int(4),
                    Total double (6,2));
ALTER TABLE SAIDA ADD CONSTRAINT PK_SAIDA PRIMARY KEY (CodSaida);
ALTER TABLE SAIDA ADD FOREIGN KEY (CodLoja) REFERENCES LOJA (CodLoja) ON DELETE CASCADE;
ALTER TABLE SAIDA ADD FOREIGN KEY (CodTransportadora) REFERENCES TRANSPORTADORA (CodTransportadora) ON DELETE CASCADE;
ALTER TABLE SAIDA MODIFY COLUMN CodSaida INT NOT NULL AUTO_INCREMENT;

CREATE TABLE ITEMSAIDA (CodItemSaida int,
                        CodSaida int(5),
                        CodProduto int(5),
                        Quantidade int(4),
                        Valor double(6,2));
ALTER TABLE ITEMSAIDA ADD CONSTRAINT PK_ITEMSAIDA PRIMARY KEY (CodItemSaida);
ALTER TABLE ITEMSAIDA ADD FOREIGN KEY (CodSaida) REFERENCES SAIDA (CodSaida) ON DELETE CASCADE;
ALTER TABLE ITEMSAIDA ADD FOREIGN KEY (CodProduto) REFERENCES PRODUTO (CodProduto) ON DELETE CASCADE;
ALTER TABLE ITEMSAIDA MODIFY COLUMN CodItemSaida INT NOT NULL AUTO_INCREMENT;

DELIMITER $$
CREATE PROCEDURE GET_NOW(OUT DATE_NOW DATETIME)
BEGIN
    SELECT NOW() INTO DATE_NOW ;
END $$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER Tgr_Insert_Time BEFORE INSERT
ON Produto
FOR EACH ROW
BEGIN
    set @DATE_NOW = '';
	CALL GET_NOW(@DATE_NOW);
    SET NEW.CreateTime = @DATE_NOW;
END$$
DELIMITER ;