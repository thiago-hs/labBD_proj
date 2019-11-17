const path    = require('path');
const mysql = require('mysql');
const express = require('express');
const app     = express();
	  app.use(express.json());
const router  = express.Router();

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

//everything else
router.get('/*',function(req,res){
	res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');