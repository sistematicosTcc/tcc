import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';


// import { Senha } from './pages/Login/senha/senha'
// import { Senha2 } from './pages/Login/senha/senha2'
// import { Senha3 } from './pages/Login/senha/senha3'

// import { Cadastro } from './pages/Login/cadastro/cadastro';
// import { Cadastro2 } from './pages/Login/cadastro/cadastro2';
// import { Cadastro3 } from './pages/Login/cadastro/cadastro3';

import { Login } from './pages/Login/login'
import { Home } from './pages/home'

export function Routers () {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={ Home }/>
        <Route path="/login"  component={ Login }/> 
        {/* <Route path="/cad" component={Cadastro}/>
        <Route path="/cad2" component={Cadastro2}/>
        <Route path="/cad3" component={Cadastro3}/>
        <Route path="/senha" component={Senha}/>
        <Route path="/senha2" component={Senha2}/>
      <Route path="/senha3" component={Senha3}/> */}
      </Routes>
    </Router>
  )
}