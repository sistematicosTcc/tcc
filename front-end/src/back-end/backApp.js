import React, { useState } from "react"; 
import Axios from "axios";
import "./backcss.css"

export const BackEnd = () =>{
    const [emailReg, setEmailReg] = useState("");
    const [senhaReg, setSenhaReg] = useState("");

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
 
    const register = () => {
        Axios.post('http://localhost3000/register', {
            email: emailReg, 
            senha: senhaReg
        }).then((response) => {
            console.log(response)
        })

        const login = () => {
            Axios.post('http://localhost3000/login', {
                email: email, 
                senha: senha
            }).then((response) => {

                if(response.data.message){
                    setLoginStatus(response.data.message)
                } else{
                    setLoginStatus(response.data[0].email)
                }
            })
    }

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
            <h1>Login</h1>
            <input type="text" placeholder="Email..."  onChange={(e) => {
                    setEmail(e.target.value);
                    }}  /> 
            <input type = "text" placeholder="Senha..." onChange={(e) => {
                    setSenha(e.target.value);
                    }}  />
                <button class="Continue-button" onClick={login}> Login </button>
            </div>

            <h1>{loginStatus}</h1>

        </div>
    )
}


export default BackEnd;