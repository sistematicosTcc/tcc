import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/Login/login";

import {Cadastros} from "./pages/Login/cadastro/cadastro";
import {Cadastros2} from "./pages/Login/cadastro/cadastro2";
import {Cadastros3} from "./pages/Login/cadastro/cadastro3";

import {Senha} from "./pages/Login/senha/senha"
import {Senha2} from "./pages/Login/senha/senha2"
import {Senha3} from "./pages/Login/senha/senha3"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cad" element={<Cadastros />}/>
        <Route path="/cad2" element={<Cadastros2 />}/>
        <Route path="/cad3" element={<Cadastros3 />}/>
        <Route path="/senha" element={<Senha />}/>
        <Route path="/senha2" element={<Senha2 />}/>
        <Route path="/senha3" element={<Senha3 />}/>
      </Routes>
    </Router>
  );
}

export default App;
