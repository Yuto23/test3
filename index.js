var mysql =require("mysql");
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:null
});
conn.query("create database PaxEvan;",(rr)=>{
    console.log();
    console.timeEnd();
});