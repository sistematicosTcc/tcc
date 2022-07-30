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

app.post("/register", (req, res) => {

    const email = req.body.nome
    const senha = req.body.senha

    db.query(
        "INSERT INTO usuarios (email, senha) VALUES (?, ?)", 
        [email, senha],
        (err, result) => {
            console.log(err);
        }
    );
});

app.listen(3306, () => { 
    console.log("Running server...");
});