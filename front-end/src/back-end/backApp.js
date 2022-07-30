import React from "react"; 
import "./backcss.css"

export const BackEnd = () =>{
    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <label> E-mail </label>
                <input type="text" />
                <label> Senha </label>
                <input type = "text" />
                <button class="Continue-button"> Cadastre-se </button>
            </div>
            <div>
            <h1>Cadastro</h1>
            <input type="text" placeholder="Email..." /> 
            <input type = "text" placeholder="Senha..."/>
                <button class="Continue-button"> Cadastre-se </button>
            </div>

        </div>
    )
}

export default BackEnd;