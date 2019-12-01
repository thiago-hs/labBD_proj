const path = require('path');
const mysql = require('mysql');
const express = require('express');
const app = express();
const router  = express.Router();

app.use('/assets', express.static(path.resolve(__dirname, '../client/build/')));
app.use(express.json());

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'estoque'
});

con.connect((err)=>{
  	if (err) throw err;
  	console.log("Connected!");
});


//CATEGORIA
router.get('/api/categoria',function(req,res){
	con.query("SELECT * FROM CATEGORIA", (error, result) =>{
    	if (error) throw error;
    	
    	res.send(result);
  	});
});
router.get('/api/categoria/:id',function(req,res){
	con.query(`SELECT * FROM CATEGORIA WHERE CodCategoria=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send(result);
  	});
});
router.post('/api/categoria',function(req,res){	
	const categoriaReq = req.body;
	con.query(`INSERT INTO CATEGORIA (NomeCategoria) VALUES ('${categoriaReq.nome}')`, (error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM CATEGORIA WHERE CodCategoria=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});
router.delete('/api/categoria/:id',function(req,res){
	con.query(`DELETE FROM CATEGORIA WHERE CodCategoria=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});
router.put('/api/categoria/:id',function(req,res){
	const categoriaReq = req.body;
	con.query(`
		UPDATE CATEGORIA 
		SET  NomeCategoria='${categoriaReq.nome}'
		WHERE CodCategoria=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM CATEGORIA WHERE CodCategoria=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//CIDADE
router.get('/api/cidade',function(req,res){
	con.query('SELECT * FROM CIDADE', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});
});

router.get('/api/cidade/:id',function(req,res){
	con.query(`SELECT * FROM CIDADE WHERE CodCidade=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});
router.post('/api/cidade/',function(req,res){
	const cidadeReq = req.body;
	con.query(`INSERT INTO CIDADE (Cidade,Uf) VALUES ('${cidadeReq.nome}','${cidadeReq.uf}')`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM CIDADE WHERE CodCidade=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});
router.delete('/api/cidade/:id',function(req,res){
	con.query(`DELETE FROM CIDADE WHERE CodCidade=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});
router.put('/api/cidade/:id',function(req,res){
	const categoriaReq = req.body;
	con.query(`
		UPDATE CIDADE
		SET  Cidade='${categoriaReq.nome},uf='${categoriaReq.uf}'
		WHERE CodCidade=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM CIDADE WHERE CodCidade=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//FORNECEDOR
router.get('/api/fornecedor',function(req,res){
	con.query('SELECT * FROM FORNECEDOR', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});	

router.get('/api/fornecedor/:id',function(req,res){
	con.query(`SELECT * FROM FORNECEDOR WHERE CodFornecedor=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});

router.post('/api/fornecedor',function(req,res){	
	const fornecedorReq = req.body;
	con.query(`INSERT INTO FORNECEDOR (CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Email,CNPJ,Tel) VALUES
	         ('${fornecedorReq.codCidade}','${fornecedorReq.nome}','${fornecedorReq.endereco}','${fornecedorReq.bairro}','${fornecedorReq.cep}','${fornecedorReq.email}','${fornecedorReq.cnpj}','${fornecedorReq.tel}')`, (error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM FORNECEDOR WHERE CodFornecedor=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/fornecedor/:id',function(req,res){
	con.query(`DELETE FROM FORNECEDOR WHERE CodFornecedor=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/fornecedor/:id',function(req,res){
	const fornecedorReq = req.body;
	con.query(`
		UPDATE FORNECEDOR 
		SET CodCidade,NomeFornecedor,Endereco,Bairro,CEP,Email,CNPJ,Tel = '${fornecedorReq.codCidade}','${fornecedorReq.nome}',
		'${fornecedorReq.endereco}','${fornecedorReq.bairro}', '${fornecedorReq.cep}','${fornecedorReq.email}','${fornecedorReq.cnpj}',
		'${fornecedorReq.tel}'
		WHERE CodFornecedor=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM FORNECEDOR WHERE CodFornecedor=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//TRANSPORTADORA
router.get('/api/transportadora',function(req,res){
	con.query('SELECT * FROM TRANSPORTADORA', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});

router.get('/api/transportadora/:id',function(req,res){
	con.query(`SELECT * FROM TRANSPORTADORA WHERE CodTransportadora=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
  	});
});

router.post('/api/transportadora/',function(req,res){
	const transportadoraReq = req.body;
	con.query(`INSERT INTO TRANSPORTADORA(NomeTransport,Endereco,Contato,Tel) VALUES 
		     ('${transportadoraReq.nome}','${transportadoraReq.endereco}','${transportadoraReq.contato}','${transportadoraReq.tel}')`, 
		     (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM TRANSPORTADORA WHERE CodTransportadora=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/transportadora/:id',function(req,res){
	con.query(`DELETE FROM TRANSPORTADORA WHERE CodTransportadora=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/transportadora/:id',function(req,res){
	const transportadoraReq = req.body;
	con.query(`
		UPDATE TRANSPORTADORA
		SET NomeTransport,Endereco,Contato,Tel = '${transportadoraReq.nome}','${transportadoraReq.endereco}',
		'${transportadoraReq.contato}','${transportadoraReq.tel}'
		WHERE CodTransportadora=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM TRANSPORTADORA WHERE CodTransportadora=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//ENTRADA
router.get('/api/entrada',function(req,res){
	con.query('SELECT * FROM ENTRADA', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});

router.get('/api/entrada/:id',function(req,res){
	con.query(`SELECT * FROM ENTRADA WHERE CodEntrada=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});

router.post('/api/entrada/',function(req,res){
	const entradaReq = req.body;
	con.query(`INSERT INTO ENTRADA (CodTransportadora,DataPedido,DataEntrada,Total,NumNota) VALUES ('${entradaReq.codTransportadora}','${entradaReq.dataPedido}','${entradaReq.dataEntrada}','${entradaReq.total}','${entradaReq.numNota}')`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM ENTRADA WHERE CodEntrada=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/entrada/:id',function(req,res){
	con.query(`DELETE FROM ENTRADA WHERE CodEntrada=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/entrada/:id',function(req,res){
	const entradaReq = req.body;
	con.query(`
		UPDATE ENTRADA
		SET CodTransportadora,DataPedido,DataEntrada,Total,NumNota = '${entradaReq.codTransportadora}', '${entradaReq.dataPedido}','${entradaReq.dataEntrada}',
		'${entradaReq.total}','${entradaReq.numNota}'
		WHERE CodEntrada=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM ENTRADA WHERE CodEntrada=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//ITEMENTRADA
router.get('/api/itementrada',function(req,res){
	con.query('SELECT * FROM ITEMENTRADA', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});

router.get('/api/itementrada/:id',function(req,res){
	con.query(`SELECT * FROM ITEMENTRADA WHERE CodItemEntrada=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});

router.post('/api/itementrada/',function(req,res){
	const itementradaReq = req.body;
	con.query(`INSERT INTO ITEMENTRADA (CodProduto,CodEntrada,Quantidade,Valor) VALUES ('${itementradaReq.codProduto}','${itementradaReq.codEntrada}','${itementradaReq.qtd}','${itementradaReq.val}')`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM ITEMENTRADA WHERE CodItemEntrada=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/itementrada/:id',function(req,res){
	con.query(`DELETE FROM ITEMENTRADA WHERE CodItemEntrada=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/itementrada/:id',function(req,res){
	const itementradaReq = req.body;
	con.query(`
		UPDATE ITEMENTRADA
		SET CodProduto,CodEntrada,Quantidade,Valor = '${itementradaReq.codProd}','${itementradaReq.codEntrada}',
		'${itementradaReq.qtd}','${itementradaReq.val}'
		WHERE CodItemEntrada=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM ITEMENTRADA WHERE CodItemEntrada=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//LOJA
router.get('/api/loja',function(req,res){
	con.query('SELECT * FROM LOJA', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});

router.get('/api/loja/:id',function(req,res){
	con.query(`SELECT * FROM LOJA WHERE CodLoja=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});

router.post('/api/loja/',function(req,res){
	const lojaReq = req.body;
	con.query(`INSERT INTO LOJA (CodCidade,NomeLoja,Endereco,Tel) VALUES ('${lojaReq.codCidade}','${lojaReq.nome}',
		'${lojaReq.endereco}','${lojaReq.tel}')`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM LOJA WHERE CodLoja=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/loja/:id',function(req,res){
	con.query(`DELETE FROM LOJA WHERE CodLoja=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/loja/:id',function(req,res){
	const lojaReq = req.body;
	con.query(`
		UPDATE LOJA
		SET CodCidade,NomeLoja,Endereco,Tel = '${lojaReq.codCidade}','${lojaReq.nome}', '${lojaReq.endereco}','${lojaReq.tel}'
		WHERE CodLoja=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM LOJA WHERE CodLoja=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//SAIDA
router.get('/api/saida',function(req,res){
	con.query('SELECT * FROM SAIDA', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});

router.get('/api/saida/:id',function(req,res){
	con.query(`SELECT * FROM SAIDA WHERE CodSaida=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});

router.post('/api/saida/',function(req,res){
	const saidaReq = req.body;
	con.query(`INSERT INTO SAIDA (CodLoja,CodTransportadora,Total) VALUES ('${saidaReq.codLoja}','${saidaReq.codTrasportadora}','${saidaReq.total}')`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM SAIDA WHERE CodSaida=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/saida/:id',function(req,res){
	con.query(`DELETE FROM SAIDA WHERE CodSaida=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/saida/:id',function(req,res){
	const saidaReq = req.body;
	con.query(`
		UPDATE SAIDA
		SET CodLoja,CodTransportadora,Total = '${saidaReq.codLoja}','${saidaReq.codTrasportadora}','${saidaReq.total}'
		WHERE CodSaida=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM SAIDA WHERE CodSaida=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//ITEMSAIDA
router.get('/api/itemsaida',function(req,res){
	con.query('SELECT * FROM ITEMSAIDA', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});

});

router.get('/api/itemsaida/:id',function(req,res){
	con.query(`SELECT * FROM ITEMSAIDA WHERE CodItemSaida=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
		
  	});
});

router.post('/api/itemsaida/',function(req,res){
	const itemsaidaReq = req.body;
	con.query(`INSERT INTO ITEMSAIDA (CodSaida,CodProduto,Quantidade,Valor) VALUES 
		('${itemsaidaReq.codSaida}','${itemsaidaReq.codProd}','${itemsaidaReq.qtd}','${itemsaidaReq.val}')`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM ITEMSAIDA WHERE CodItemSaida=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});

router.delete('/api/itemsaida/:id',function(req,res){
	con.query(`DELETE FROM ITEMSAIDA WHERE CodItemSaida=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});

router.put('/api/itemsaida/:id',function(req,res){
	const itemsaidaReq = req.body;
	con.query(`
		UPDATE ITEMSAIDA
		SET CodSaida,CodProduto,Quantidade,Valor = '${itemsaidaReq.codSaida}','${itemsaidaReq.codProd}','${itemsaidaReq.qtd}','${itemsaidaReq.val}'
		WHERE CodItemSaida=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM ITEMSAIDA WHERE CodItemSaida=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//PRODUTO
router.get('/api/produto',function(req,res){
	con.query('SELECT * FROM PRODUTO', (error, result)=>{
		if (error) throw error;

		res.send(result);
	});
});

router.get('/api/produto/:id',function(req,res){
	con.query(`SELECT * FROM PRODUTO WHERE CodProduto=${req.params.id}`, (error,result) =>{
		if (error) throw error;

		res.send(result);
  	});
});
router.post('/api/produto/',function(req,res){
	const produtoReq = req.body;
	con.query(`INSERT INTO PRODUTO (CodCategoria,CodFornecedor,Descricao,Peso,QntMin) VALUES (${produtoReq.categoria},${produtoReq.fornecedor},'${produtoReq.descricao}',${produtoReq.peso},${produtoReq.qtdMin})`, (error, result) =>{
    	if (error) throw error;

		con.query(`SELECT * FROM PRODUTO WHERE CodProduto=${result.insertId}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			
			res.send(selectResult);
		  });
  	});
});
router.delete('/api/produto/:id',function(req,res){
	con.query(`DELETE FROM PRODUTO WHERE CodProduto=${req.params.id}`, (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
			result: 'OK'
		});
  	});
});
router.put('/api/produto/:id',function(req,res){
	const produtoReq = req.body;
	con.query(`
		UPDATE PRODUTO
		SET  CodCategoria=${produtoReq.categoria},CodFornecedor=${produtoReq.fornecedor},Descricao='${produtoReq.produtoReq}',Peso=${produtoReq.peso},QntMin=${produtoReq.qtdMin}
		WHERE CodProduto=${req.params.id}`, 
		(error, result) =>{
    	if (error) throw error;
		con.query(`SELECT * FROM PRODUTO WHERE CodProduto=${req.params.id}`, (selectError, selectResult) =>{
			if (selectError) throw selectError;
			res.send(selectResult);
		  });
  	});
});

//everything else
router.get('/*',function(req,res){
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3030);
console.log('Running at Port 3030');