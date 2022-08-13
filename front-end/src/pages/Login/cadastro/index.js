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

app.post('/cad', (req, res) => { //trocar local... por `${currentUrl}/...`

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

/* se der sucesso isso vai pra um PENDING,  (data.status === "PENDING"){
    const {email} = credentials;
    history.push(`/verificacao/${email}`) ?????  react-router-dom

    path="verificacao/:email"
    */

    db.query("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?, ?, ?)",
        [nome, email, senha],
        (err, result) => {
            console.log(err)
        });
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    console.log(email)
    console.log(senha)


    db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?",
        [email, senha],
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }

            if (result != null) {
                res.send(result)
            } else {
                res.send({ message: "Usuário ou senha incorretos." });
            }
        }

    )
})

app.post('/email', (req, res) => {
    const email = req.body.email;

    db.query("SELECT email FROM usuarios WHERE email = ?",
        [email],
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }

            console.log(result)
            if (result != null) {
                res.send(result)
            } else {
                res.send({ message: "Email não existe no banco." });
            }
        }

    )

    return res
})

app.listen(3333, () => {
    console.log("Running server...");
});

//-------------------------Autenticaocao seguranca------------------------------

