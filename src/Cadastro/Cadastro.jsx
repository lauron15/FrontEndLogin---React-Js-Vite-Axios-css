import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Cadastro.css";

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form default submission
        const cadastro = {
            Nome: username,
            Senha: password,
            Email: email
        };

        fetch("http://localhost:5173/Cadastro", {  // Update the route as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cadastro) // Use 'cadastro' instead of 'user'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            window.alert('Cadastro realizado com sucesso!');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            window.alert('Ocorreu um erro: ' + error.message);
        });
    };

    return (
        <div className='App'>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                <div className="input-field">
                    <input 
                        type='text' 
                        placeholder='Nome' 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input 
                        type='email' 
                        placeholder='E-mail' 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input 
                        type='password' 
                        placeholder='Password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit'>Cadastrar</button> {/* Changed button text */}
                <div className="TelaLogin">
                    <Link to="/Login">Ir para o Login</Link> {/* Updated Link path */}
                </div>
            </form>
        </div>
        </div>
    );
};

export default Cadastro; // Updated export to match component name
