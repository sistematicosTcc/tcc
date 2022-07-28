import React, { useState } from "react"; 


function App() {
    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <label> E-mail </label>
                <input type="text" />
                <label> Senha </label>
                <input type = "text" />
                <button> Cadastre-se </button>
            </div>
            <div>
            <h1>Cadastro</h1>
            <input type="text" placeholder="Email..." /> 
            <input type = "text" placeholder="Senha..."/>
                <button> Cadastre-se </button>
            </div>

        </div>
    )
}