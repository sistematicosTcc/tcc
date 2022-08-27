import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import PrivateRouter from "./component/helper/PrivateRouter";

import { UserStorage } from "./contexts/UserContexts";

import { Senha } from "./pages/Login/senha/senha";
import { Senha2 } from "./pages/Login/senha/senha2";
import { Senha3 } from "./pages/Login/senha/senha3";

import { Cadastro } from "./pages/Login/cadastro/cadastro";
import { Cadastro2 } from "./pages/Login/cadastro/cadastro2";
import { Cadastro3 } from "./pages/Login/cadastro/cadastro3";

import { Login } from "./pages/Login/login";
import { Home } from "./pages/home.js";

import { Dashboard } from "./pages/Dashboard/index.js";
import { Teste } from "./pages/Dashboard/teste.js";
import { Wallet } from "./pages/Dashboard/wallet.js";
import { Transacoes } from "./pages/Dashboard/transacoes.js";
import { Analise } from "./pages/Dashboard/analise.js";
import { Ajuda } from "./pages/Dashboard/ajuda.js";
import { Configuracoes } from "./pages/Dashboard/configuracoes.js";
import { BackEnd } from "./back-end/backApp";

export function Routers() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="*" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cad" element={<Cadastro />} />
          <Route path="/cad2" element={<Cadastro2 />} />
          <Route path="/cad3" element={<Cadastro3 />} />
          <Route path="/senha" element={<Senha />} />
          <Route path="/senha2" element={<Senha2 />} />
          <Route path="/senha3" element={<Senha3 />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route path="/teste" element={<Teste />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transacoes" element={<Transacoes />} />
          <Route path="/analise" element={<Analise />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/backend" element={<BackEnd />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default Routes;
