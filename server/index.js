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
		SET  Cidade,uf='${categoriaReq.nome}','${categoriaReq.uf}'
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


//everything else
router.get('/*',function(req,res){
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3030);
console.log('Running at Port 3030');