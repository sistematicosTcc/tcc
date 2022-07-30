const express = require("express"); 
const mysql = require("mysql"); 

const app = express(); 

app.use(express.json()); 

const db = mysql.createConnection({ 
    user: "root",
    host: "localhost",
    password: "c8c04cf89", 
    database: "cryptop",
}); 

app.listen(3306, () => { 
    console.log("Running server...");
});