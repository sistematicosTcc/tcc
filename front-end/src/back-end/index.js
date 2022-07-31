const { default: axios } = require("axios");
const express = require("express"); 
const mysql = require("mysql"); 
const cors = require('cors');

const app = express(); 

app.use(express.json()); 
app.use('cors');

const db = mysql.createConnection({ 
    user: "root",
    host: "localhost",
    password: "c8c04cf89", 
    database: "cryptop",
}); 

app.post('/backend', (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;


    db.query("INSERT INTO USUARIOS (EMAIL, SENHA) VALUES(?, ?)", 
    [email, senha], 
    (err, result) => {
        console.log(err)
    });
});

app.listen(3306, () => { 
    console.log("Running server...");
});