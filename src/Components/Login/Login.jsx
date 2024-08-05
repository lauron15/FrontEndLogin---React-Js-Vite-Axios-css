import { FaUser, FaLock} from "react-icons/fa"; //vai importar ambos simbolos do usuario e simbolo do cadeado.

import { useState } from "react";
import "./Login.css";

const Login = () => {

    const[username,setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleSubit = (event) =>
        {
            event.preventDefault();
            console.log("Envio");

            alert("Enviando os dados:" + username + " " + password);
    };

  return (
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
                <a href="#">Registrar</a>
            </p>
        </div>
      </form>
    </div>
  )
}

export default Login

//rafce (cria um componente do react)
// trabalhamos com o html em conjunto com o javascript o tempo inteiro
// mas podemos usar bibliotecas, o que auxiliar na criação.
//além disso, todo o projeto ja é criado com eventos
//Os componented do Fa user e FaLock eu importei atrave´s do código: npm i @react-icons/all-files react-icons 
//<FaUser className="icon"/>  AQUI EU CHAMO O COMPONENTE. 
//<FaLock className="icon"/> Aqui eu chamo o segundo componente, perceba que o nome não é o mesmo. 
//Não é tão distante do html
//<input type='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} ** Irá habilitar o envio da senha e do email. 
