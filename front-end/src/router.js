import {Routes , Route, BrowserRouter} from 'react-router-dom';
import React from "react";

import { Senha } from './pages/Login/senha/senha'
import { Senha2 } from './pages/Login/senha/senha2'
import { Senha3 } from './pages/Login/senha/senha3'

import { Cadastro } from './pages/Login/cadastro/cadastro';
import { Cadastro2 } from './pages/Login/cadastro/cadastro2';
import { Cadastro3 } from './pages/Login/cadastro/cadastro3';

import { Login } from './pages/Login/login'
import { Home } from './pages/home.js'
import {CoinList} from './component/coingecko/coingecko';

export function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/cad" exact element={<Cadastro />}/>
        <Route path="/cad2" element={<Cadastro2 />}/>
        <Route path="/cad3" element={<Cadastro3 />}/>
        <Route path="/senha" element={<Senha />}/>
        <Route path="/senha2" element={<Senha2 />}/>
        <Route path="/senha3" element={<Senha3 />}/>
        <Route path="/coins" element={<CoinList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routes;
