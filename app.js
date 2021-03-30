//変数を定義をする
const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
//const canvasDatagrid = require('canvas-datagrid')

//クライアントにアクセスさせたい静的ファイルが格納されているフォルダを設定する
app.use(express.static("public"));

/**入力フォームから送られてくるデータを取得する
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
**/

//using res.sendFile() to deliver an HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
});

// データベース接続情報
const connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:null,
  database:'PaxEvan'
});
connection.connect(function(err) {
	if (err) throw err;
	console.log('Database Connected');
});

app.get('/data.json', (request, response) => {
//mysqlのデータを引っ張る
  const sql = "select * from dt"
	connection.query(sql, function (err, result, fields) {  
	if (err) throw err;
	response.send(result)
	});
});

app.get('/scripts/mustache.js', (request, response) => {
  response.sendFile(path.join(__dirname, 'node_modules/mustache/mustache.min.js'));
});

app.listen(3000);