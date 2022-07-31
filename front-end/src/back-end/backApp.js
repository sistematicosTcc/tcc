import React, { useState } from "react"; 
import Axios from "axios";
import "./backcss.css"

export const BackEnd = () =>{
    const [emailReg, setEmailReg] = useState("");
    const [senhaReg, setSenhaReg] = useState("");

    const register = () => {
        Axios.post('http://localhost3000/3006', {
            email: emailReg, 
            senha: senhaReg
        }).then((response) => {
            console.log(response)
        })
    }


    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <label> E-mail </label>
                <input type="text" onChange={(e) => {
                    setEmailReg(e.target.value);
                    }}  />
                <label> Senha </label>
                <input type="text" onChange={(e) => {
                    setSenhaReg(e.target.value);
                    }}  />
                <button class="Continue-button" onClick={register}> Register </button>
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