const path    = require('path');
const mysql = require('mysql');
const express = require('express');
const app     = express();
const router  = express.Router();

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'alunofatec',
  database : 'estoque'
});

con.connect((err)=>{
  	if (err) throw err;
  	console.log("Connected!");
});

router.get('/api/categoria',function(req,res){
	con.query("SELECT * FROM CATEGORIA", (error, result) =>{
    	if (error) throw error;
    	
    	res.send({
    		categorias: result.map(categoria=>({
    			id: categoria.CodCategoria,
    			nome: categoria.NomeCategoria
    		}))
    	});
  	});
});

router.get('/',function(req,res){
	res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');