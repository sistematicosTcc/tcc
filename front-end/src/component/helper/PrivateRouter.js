import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";

const PrivateRouter = ({children}) => {
  const { userLogado } = useContext(UserContext);
  console.log(userLogado)
  if(!userLogado){
    return <Navigate to="/loginarea" replace/>
  }
  return children
};

export default PrivateRouter;