var mysql =require("mysql");
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:null
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