import { FaUser, FaLock} from "react-icons/fa"; //vai importar ambos simbolos do usuario e simbolo do cadeado.
import { useEffect, useState } from "react";
import "./Login.css";
import React from "react";
import {Link} from "react-router-dom";

const Login = () => {

    const[username,setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[redirect, setRedirect] = useState(false)


    // ~fiz a função criar um objeto de user com os nomes igual eu tenho no backend e fiz um fetch para a minha rota de loguin
    // Essa função antes do return, é a responsável para criar a requisição da API do front para o back end. Essa const vai habilitar a integração com usuario e senha. 
    const handleSubit = (event) => {
          var user = {
            Nome: username,
            Senha: password
          }
          fetch("http://localhost:5173/Login", {
            method: 'POST', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Tipo de conteúdo
            },
            body: JSON.stringify(user) // Convertendo os dados para uma string JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            window.alert(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            window.alert(error);
        });
    };

  return (
    <div className='App'>
    <div className='container'>
      <form onSubmit={handleSubit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
        <input type='E-mail' placeholder='E-mail' 
        onChange={(e) => setUsername(e.target.value)}/>
        <FaUser className="icon"/> 
        </div>
        <div className="input-field">
        <input type='Password' placeholder='Password'
        required
        onChange={(e) => setPassword(e.target.value)}/>
        <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox"/>
                <br></br>Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="sigup-link">
            <p>Não tem uma conta? 
            <Link to="/Cadastro"> Registrar</Link>
            </p>
        </div>
      </form>
    </div>
        </div>
  )
}

export default Login

//   **** <Link to="/src/Cadastro/Cadastro.jsx">Ir para o Login</Link> está dando problema *****

//rafce (cria um componente do react)
// trabalhamos com o html em conjunto com o javascript o tempo inteiro
// mas podemos usar bibliotecas, o que auxiliar na criação.
//além disso, todo o projeto ja é criado com eventos
//Os componented do Fa user e FaLock eu importei atrave´s do código: npm i @react-icons/all-files react-icons 
//<FaUser className="icon"/>  AQUI EU CHAMO O COMPONENTE. 
//<FaLock className="icon"/> Aqui eu chamo o segundo componente, perceba que o nome não é o mesmo. 
//Não é tão distante do html
//<input type='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} ** Irá habilitar o envio da senha e do email. 
