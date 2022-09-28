import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import PrivateRouter from "./component/helper/PrivateRouter";

import { UserStorage } from "./contexts/UserContexts";

import { Senha } from "./pages/Login/senha/senha";
import { Senha2 } from "./pages/Login/senha/senha2";
import { Senha3 } from "./pages/Login/senha/senha3";

import { Cadastro } from "./pages/Login/cadastro/cadastro";
import { Cadastro3 } from "./pages/Login/cadastro/cadastro3";

import { Login } from "./pages/Login/login";
import { Home } from "./pages/home.js";

import { Dashboard } from "./pages/Dashboard/index.js";
import { Exchange } from "./pages/Dashboard/exchange.js";
import { Wallet } from "./pages/Dashboard/wallet.js";
import { Transacoes } from "./pages/Dashboard/transacoes.js";
import { Ajuda } from "./pages/Dashboard/ajuda.js";
import { Configuracoes } from "./pages/Dashboard/configuracoes.js";
import { LoginOn } from "./pages/LoginOn/LoginOn";

import { AjudaText } from "./pages/page-text/ajudaText";
import { Nft } from "./pages/page-text/nft";
import { AprenderGanhar } from "./pages/page-text/aprenderGanhar";
import { Educacao } from "./pages/page-text/educacao";
import { HistoriaCripto } from "./pages/page-text/historiaCripto";
import { SobreNos } from "./pages/page-text/sobreNos";
import { Transparencia } from "./pages/page-text/transparencia";

export function Routers() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="*" exact element={<Home />} />
          <Route
            path="/homeLogin"
            element={
              <PrivateRouter>
                <LoginOn />
              </PrivateRouter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cad" element={<Cadastro />} />
          <Route path="/cad2" element={<Cadastro3 />} />
          <Route path="/senha" element={<Senha />} />
          <Route path="/senha2" element={<Senha2 />} />
          <Route path="/senha3" element={<Senha3 />} />
          <Route path="/ajudaText" element={<AjudaText/>} />
          <Route path="/aprender" element={<AprenderGanhar/>} />
          <Route path="/educacao" element={<Educacao/>} />
          <Route path="/historia" element={<HistoriaCripto/>} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/transparencia" element={<Transparencia />} />


          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/exchange"
            element={
              <PrivateRouter>
                <Exchange />
              </PrivateRouter>
            }
          />


          <Route
            path="/wallet"
            element={
              <PrivateRouter>
                <Wallet />
              </PrivateRouter>
            }
          />
          <Route
            path="/transacoes"
            element={
              <PrivateRouter>
                <Transacoes />
              </PrivateRouter>
            }
          />
          <Route
            path="/ajuda"
            element={
              <PrivateRouter>
                <Ajuda />
              </PrivateRouter>
            }
          />
          <Route
            path="/configuracoes"
            element={
              <PrivateRouter>
                <Configuracoes />
              </PrivateRouter>
            }
          />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default Routes;
