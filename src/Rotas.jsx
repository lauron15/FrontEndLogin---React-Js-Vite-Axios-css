import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./Components/Login/Login.jsx"
import Cadastro from "./Cadastro/Cadastro.jsx";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login}/>
          <Route path="/login" Component={Login}/>
          <Route path="/cadastro"  Component={Cadastro}/>
          {/* <Route path="/usuario" element={<Usuario />} /> */}
        </Routes>
      </BrowserRouter>
    )
}

export default Rotas; 

//esse arquivo vaiser o gerenciador de rotas na nossa aplicação, lembrando que o react não foi feito para várias abas
// e sim para aplicação de aba única 
//Agora temos que importar o routes.js para o app.js