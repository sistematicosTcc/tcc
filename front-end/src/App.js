import { Routers } from "./router";
import React, {useState} from "react";
import LoginArea from './pages/Login/cadastro/loginArea';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
  
    setUser(newUser);
  }
  
    if(user === null){
      return(
        <LoginArea onReceiveGoogle={actionLoginDataGoogle} />
      );
    }
  return (
    <>
      <BrowserRouter>
        <Routers user={user}/>
      </BrowserRouter>
    </>
  );
}
export default App;