const express = require('express');
const mysql = require('mysql');
const app = express();
// データベース接続情報
var conn = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:null,
    database:'PaxEvan'
});
conn.query("create database PaxEvan;",(err)=>{
    console.log("1:",err);
    conn.query("create table PaxEvan.dt(id int,name varchar(12));",(err)=>{
        console.log("2:",err);
        conn.query("insert PaxEvan.dt value(1,'aaaa');",(err)=>{
            console.log("3:",err);
            conn.query("select * from PaxEvan.dt;",(err,re)=>{
                console.log("4:",err);
                conn.end()
            })
        })
    })
});

// テーブルdtのデータを取得してindex.ejsで表示
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM dt',
    (error, results) => {
      res.render('index.ejs',{dt:results});
    }
  );
});

app.listen(3000);