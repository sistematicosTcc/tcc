const { default: axios } = require("axios");
const express = require("express"); 
const mysql = require("mysql"); 
const cors = require('cors');

const app = express(); 

app.use(express.json()); 
app.use(cors());

const db = mysql.createConnection({ 
    user: "root",
    host: "localhost",
    password: "c8c04cf89", 
    database: "cryptop",
}); 

app.post('/backend', (req, res) => {

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;


    db.query("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?, ?, ?)", 
    [nome, email, senha], 
    (err, result) => {
        console.log(err)
    });
});

app.post('/login', (req, res) => { 
    const email = req.body.email;
    const senha = req.body.senha;


    db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, senha],
    (err, result) => {

        if (err) {
            res.send({err: err})
        } 

        
            if (result.lenght > 0){
                res.send(result)
            } else {
                res.send({message: "Usuário ou senha incorretos."});
        }
        }

    )
})

app.listen(3333, () => { 
    console.log("Running server...");
});