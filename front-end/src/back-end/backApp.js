import React from "react"; 
import "./backcss.css"

function backApp () {
    const [emailReg, setNomeReg] = useState('')
    const [senhaReg, setSenhaReg] = useState('')
    
    const register = () => {
        Axios.post("https://localhost3000/backend", { 
            username: emailReg,
            password: senhaReg, 
        }).then((response) => {
            console.log(response);
        })  
}} 

export const BackEnd = () =>{
    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <label> E-mail </label>
                <input type="text" />
                <label> Senha </label>
                <input type = "text" />
                <button onClick={register} class="Continue-button"> Cadastre-se </button>
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